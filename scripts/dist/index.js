"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const billy_core_1 = require("@fivethree/billy-core");
const billy_plugin_core_1 = require("@fivethree/billy-plugin-core");
const params_1 = require("./params");
let Scripts = class Scripts {
    init(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.exec(`cd ${ctx.directory}/../ && npm install && ng run app:build`, true);
            yield this.exec(`cd ${ctx.directory}/../ && npx cap copy`, true);
        });
    }
    run(plt, production, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.build(plt, production, ctx);
            yield this.install(plt, production, ctx);
        });
    }
    build(plt, production, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.exec(`cd ${ctx.directory}/../ && ng run app:build --base-href ./${production ? ' --prod' : ''}`, true);
            yield this.exec(`cd ${ctx.directory}/../ && npx cap copy ${plt}`, true);
            if (plt === 'android') {
                yield this.exec(`cd ${ctx.directory}/../android/ && ./gradlew build`, true);
            }
            else if (plt === 'ios') {
                yield this.exec(`cd ${ctx.directory}/../ios/App && fastlane build`, true);
            }
        });
    }
    install(plt, production, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            if (plt === 'android') {
                const apk = production ? 'release/app-release-unsigned.apk' : 'debug/app-debug.apk';
                yield this.exec(`native-run android --app ${ctx.directory}/../android/app/build/outputs/apk/${apk}`, true);
            }
            else if (plt === 'electron') {
                // not yet implemented
            }
            else if (plt === 'ios') {
                // not yet implemented
            }
        });
    }
    onError(ctx, err) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Error happenend while executing command', ctx.api.getLatestHistoryEntry().latest.name, err);
        });
    }
    afterAll(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            ctx.api.printHistory();
        });
    }
};
__decorate([
    billy_core_1.usesPlugins(billy_plugin_core_1.CorePlugin),
    billy_core_1.Command('init the repo'),
    __param(0, billy_core_1.context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Scripts.prototype, "init", null);
__decorate([
    billy_core_1.Command('run capacitor on a specified platform'),
    __param(0, billy_core_1.param(params_1.platform)), __param(1, billy_core_1.param(params_1.prod)), __param(2, billy_core_1.context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean, Object]),
    __metadata("design:returntype", Promise)
], Scripts.prototype, "run", null);
__decorate([
    billy_core_1.Command('build capacitor on a specified platform'),
    __param(0, billy_core_1.param(params_1.platform)), __param(1, billy_core_1.param(params_1.prod)), __param(2, billy_core_1.context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean, Object]),
    __metadata("design:returntype", Promise)
], Scripts.prototype, "build", null);
__decorate([
    billy_core_1.Command('install capacitor on a specified platform'),
    __param(0, billy_core_1.param(params_1.platform)), __param(1, billy_core_1.param(params_1.prod)), __param(2, billy_core_1.context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean, Object]),
    __metadata("design:returntype", Promise)
], Scripts.prototype, "install", null);
__decorate([
    billy_core_1.Hook(billy_core_1.onError),
    __param(0, billy_core_1.context()), __param(1, billy_core_1.error()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], Scripts.prototype, "onError", null);
__decorate([
    billy_core_1.Hook(billy_core_1.afterAll),
    __param(0, billy_core_1.context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Scripts.prototype, "afterAll", null);
Scripts = __decorate([
    billy_core_1.App()
], Scripts);
exports.Scripts = Scripts;
