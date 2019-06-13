import { App, Command, param, context, Context, usesPlugins, Hook, onError, error, afterAll, Action } from '@fivethree/billy-core';
import { CorePlugin } from '@fivethree/billy-plugin-core';
import { platform, prod } from './params';

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


    @Hook(onError)
    async onError(@context() ctx: Context, @error() err) {
        console.log('Error happenend while executing command', ctx.api.getLatestHistoryEntry().latest.name, err);

    }

    @Hook(afterAll)
    async afterAll(@context() ctx: Context) {
        ctx.api.printHistory();
    }

}
