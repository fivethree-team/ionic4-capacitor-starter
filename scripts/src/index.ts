import { App, Command, param, context, Context, usesPlugins, Hook, onError, error, afterAll } from '@fivethree/billy-core';
import { CorePlugin } from '@fivethree/billy-plugin-core';
import { launch } from 'puppeteer';
import { platform, prod, headless } from './params';
import { devices, routes } from './screenshots';
import ora from 'ora';

// tslint:disable-next-line:no-empty-interface
export interface Scripts extends CorePlugin { }
@App()
export class Scripts {
    @usesPlugins(CorePlugin)

    @Command('init the repo')
    async init(@context() ctx: Context) {
        await this.exec(`cd ${ctx.directory}/../ && npm install && ng run app:build`, true);
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
            await this.exec(`cd ${ctx.directory}/../ios/App && fastlane build`, true);
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


    @Hook(onError)
    async onError(@context() ctx: Context, @error() err) {
        console.log('Error happenend while executing command', ctx.api.getLatestHistoryEntry().latest.name, err);

    }

    @Hook(afterAll)
    async afterAll(@context() ctx: Context) {
        ctx.api.printHistory();
    }

}
