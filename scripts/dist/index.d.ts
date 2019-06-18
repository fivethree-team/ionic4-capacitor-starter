import { Context } from '@fivethree/billy-core';
import { CorePlugin } from '@fivethree/billy-plugin-core';
export interface Scripts extends CorePlugin {
}
export declare class Scripts {
    init(n: any, id: any, ctx: Context): Promise<void>;
    run(plt: string, production: boolean, ctx: Context): Promise<void>;
    build(plt: string, production: boolean, ctx: Context): Promise<void>;
    install(plt: string, production: boolean, ctx: Context): Promise<void>;
    screenshots(ctx: Context, headl?: boolean): Promise<void>;
    updatePackageJSON(ctx: Context, appName?: string): Promise<void>;
    updateCapacitorConfig(ctx: Context, appName: string, id: string): Promise<void>;
    updateFastlaneFile(ctx: Context, file: string, appName: string, id: string): Promise<void>;
    onError(ctx: Context, err: any): Promise<void>;
    afterAll(ctx: Context): Promise<void>;
}
