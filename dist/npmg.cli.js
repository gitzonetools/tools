"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./npmg.plugins");
const npmgInstall = require("./npmg.install");
let npmgSmartcli = new plugins.smartcli.Smartcli();
exports.run = () => __awaiter(this, void 0, void 0, function* () {
    npmgSmartcli.addCommand('install').then((argvArg) => __awaiter(this, void 0, void 0, function* () {
        npmgInstall.install('default');
    }));
    npmgSmartcli.startParse();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtZy5jbGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9ucG1nLmNsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMENBQXlDO0FBQ3pDLDhDQUE2QztBQUU3QyxJQUFJLFlBQVksR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUE7QUFFdkMsUUFBQSxHQUFHLEdBQUc7SUFDZixZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFPLE9BQU87UUFDcEQsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUNoQyxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0YsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFBO0FBQzNCLENBQUMsQ0FBQSxDQUFBIn0=