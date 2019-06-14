import { Context } from '@fivethree/billy-core';
import { CorePlugin } from '@fivethree/billy-plugin-core';
export interface Scripts extends CorePlugin {
}
export declare class Scripts {
    init(ctx: Context): Promise<void>;
    run(plt: string, production: boolean, ctx: Context): Promise<void>;
    build(plt: string, production: boolean, ctx: Context): Promise<void>;
    install(plt: string, production: boolean, ctx: Context): Promise<void>;
    screenshots(ctx: Context, headl?: boolean): Promise<void>;
    onError(ctx: Context, err: any): Promise<void>;
    afterAll(ctx: Context): Promise<void>;
}
