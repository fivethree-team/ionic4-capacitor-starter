import { App, Command, param, context, Context, usesPlugins, Hook, onError, error, afterAll, Action } from '@fivethree/billy-core';
import { CorePlugin } from '@fivethree/billy-plugin-core';
import { launch } from 'puppeteer';
import { platform, prod, headless, name, appID } from './params';
import { devices, routes } from './screenshots';
import ora from 'ora';

// tslint:disable-next-line:no-empty-interface
export interface Scripts extends CorePlugin { }
@App()
export class Scripts {
    @usesPlugins(CorePlugin)

    @Command('init the repo')
    async init(@param(name) n, @param(appID) id, @context() ctx: Context) {
        await this.updatePackageJSON(ctx, n);
        await this.updateCapacitorConfig(ctx, n, id);
        await this.updateFastlaneFile(ctx, 'Fastfile', n, id);
        await this.updateFastlaneFile(ctx, 'Matchfile', n, id);
        await this.exec(`rm -rf ${ctx.directory}/../android ${ctx.directory}/../ios ${ctx.directory}/../electron`, true)
        await this.exec(`cd ${ctx.directory}/../ && npm install && ng run app:build`, true);
        await this.exec(`cd ${ctx.directory}/../ && npx cap add android`, true)
        await this.exec(`cd ${ctx.directory}/../ && npx cap add ios`, true)
        await this.exec(`cd ${ctx.directory}/../ && npx cap add electron`, true)
        await this.exec(`cd ${ctx.directory}/../ && npx cap copy`, true);
    }

    @Command('run capacitor on a specified platform')
    async run(@param(platform) plt: string, @param(prod) production: boolean, @context() ctx: Context) {
        await this.build(plt, production, ctx);
        await this.install(plt, production, ctx);
    }

    @Command('build capacitor on a specified platform')
    async build(@param(platform) plt: string, @param(prod) production: boolean, @context() ctx: Context) {
        await this.exec(`cd ${ctx.directory}/../ && ng run app:build --base-href ./${production ? ' --prod' : ''}`, true);
        await this.exec(`cd ${ctx.directory}/../ && npx cap copy ${plt}`, true);
        if (plt === 'android') {
            await this.exec(`cd ${ctx.directory}/../android/ && ./gradlew build`, true);
        } else if (plt === 'ios') {
            await this.exec(`cd ${ctx.directory}/../ && fastlane build`, true);
        }
    }

    @Command('install capacitor on a specified platform')
    async install(@param(platform) plt: string, @param(prod) production: boolean, @context() ctx: Context) {
        if (plt === 'android') {
            const apk = production ? 'release/app-release-unsigned.apk' : 'debug/app-debug.apk';
            await this.exec(`native-run android --app ${ctx.directory}/../android/app/build/outputs/apk/${apk}`, true);
        } else if (plt === 'electron') {
            await this.exec(`cd ${ctx.directory}/../electron &&  npx electron ./`, true);
        } else if (plt === 'ios') {
            // not yet implemented
        }
    }

    @Command('The only thing it really does is output Hello World!')
    async screenshots(@context() ctx: Context, @param(headless) headl = true) {
        console.log('headless', headl);
        await this.exec(`rm -rf ${ctx.directory}/../screenshots`, true);
        await this.exec(`mkdir ${ctx.directory}/../screenshots`, true);
        const browser = await launch({
            headless: headl
        });

        const page = await browser.newPage();
        const colors: ora.Color[] = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'gray'];
        for (const device of devices) {
            const spinner = ora('📸 Taking screenshots').start();
            const i = devices.findIndex(dev => dev.name === device.name);
            spinner.color = colors[i % colors.length];
            page.setUserAgent(device.userAgent);
            await page.setViewport(device.viewport);
            for (const r of routes) {
                spinner.text = `📸 Taking screenshots for ${device.name}: ${r.name}`;
                await page.goto(`http://localhost:8100/${r.path}`, { waitUntil: 'networkidle2' });
                await page.screenshot({ path: `${ctx.directory}/../screenshots/${device.name}_${r.name}.png` });
            }
            spinner.stop();
            console.log(`✔ Done taking screenshots for ${device.name}`);

        }

        await browser.close();
    }


    @Action({
        addToHistory: true,
        description: (ctx, appName) => `Updated package.json with name ${appName}`
    })
    async updatePackageJSON(ctx: Context, appName?: string) {
        const packageJSON = await this.parseJSON(`${ctx.directory}/../package.json`)
        packageJSON.name = appName;
        await this.writeJSON(`${ctx.directory}/../package.json`, packageJSON);
    }

    @Action({
        addToHistory: true,
        description: (ctx, appName) => `Updated capacitor config with name ${appName}`
    })
    async updateCapacitorConfig(ctx: Context, appName: string, id: string) {
        const capacitorConfig = await this.parseJSON(`${ctx.directory}/../capacitor.config.json`)
        capacitorConfig.appName = appName;
        capacitorConfig.appId = id;
        await this.writeJSON(`${ctx.directory}/../capacitor.config.json`, capacitorConfig);
    }

    @Action({
        addToHistory: true,
        description: (ctx, id, file) => `Updated ${file} with app id ${id}.`
    })
    async updateFastlaneFile(ctx: Context, file: string, appName: string, id: string) {
        const fileContents = await this.readFile(`${ctx.directory}/../fastlane/${file}`);
        await this.writeFile(`${ctx.directory}/../fastlane/${file}`, fileContents.replace(new RegExp('de.fivethree.cap', 'g'), id));
    }

    @Hook(onError)
    async onError(@context() ctx: Context, @error() err) {
        console.log('Error happenend while executing command', ctx.api.getLatestHistoryEntry().latest.name, err);

    }

    @Hook(afterAll)
    async afterAll(@context() ctx: Context) {
        ctx.api.printHistory();
    }

}
