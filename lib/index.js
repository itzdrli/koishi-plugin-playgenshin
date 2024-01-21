"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = exports.Config = exports.name = void 0;
const koishi_1 = require("koishi");
const path_1 = require("path");
exports.name = 'playgenshin';
exports.Config = koishi_1.Schema.object({});
function apply(ctx) {
    ctx.using(['console'], (ctx) => {
        ctx.console.addEntry({
            dev: (0, path_1.resolve)(__dirname, '../client/index.ts'),
            prod: (0, path_1.resolve)(__dirname, '../dist'),
        });
    });
}
exports.apply = apply;
