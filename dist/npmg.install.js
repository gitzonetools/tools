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
const paths = require("./npmg.paths");
let installExec = (packageNames) => __awaiter(this, void 0, void 0, function* () {
    let installString = '';
    for (let packageName of packageNames) {
        installString = installString + `${packageName} `;
    }
    yield plugins.smartshell.exec(`yarn global remove ${installString}`);
    for (let packageName of packageNames) {
        plugins.beautylog.info(`now preparing ${packageName}`);
        yield plugins.smartshell.exec(`yarn global remove ${packageName}`);
    }
    yield plugins.smartshell.exec(`yarn global add ${installString}`);
});
let packageLibrary = plugins.smartfile.fs.toObjectSync(plugins.path.join(paths.packageBase, 'package_library.json'));
exports.install = (packageSetArg) => __awaiter(this, void 0, void 0, function* () {
    switch (packageSetArg) {
        case 'default':
            yield installExec(packageLibrary.default);
            break;
        default:
            plugins.beautylog.warn('no set has been specified');
            break;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtZy5pbnN0YWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvbnBtZy5pbnN0YWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwwQ0FBMkM7QUFDM0Msc0NBQXVDO0FBRXZDLElBQUksV0FBVyxHQUFHLENBQU8sWUFBc0I7SUFDN0MsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFBO0lBQ3RCLEdBQUcsQ0FBQyxDQUFDLElBQUksV0FBVyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDckMsYUFBYSxHQUFHLGFBQWEsR0FBRyxHQUFHLFdBQVcsR0FBRyxDQUFBO0lBQ25ELENBQUM7SUFDRCxNQUFNLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLHNCQUFzQixhQUFhLEVBQUUsQ0FBQyxDQUFBO0lBQ3BFLEdBQUcsQ0FBQyxDQUFDLElBQUksV0FBVyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDckMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLFdBQVcsRUFBRSxDQUFDLENBQUE7UUFDdEQsTUFBTSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsV0FBVyxFQUFFLENBQUMsQ0FBQTtJQUNwRSxDQUFDO0lBQ0QsTUFBTSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsYUFBYSxFQUFFLENBQUMsQ0FBQTtBQUNuRSxDQUFDLENBQUEsQ0FBQTtBQUVELElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FDcEQsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxDQUM3RCxDQUFDO0FBRVMsUUFBQSxPQUFPLEdBQUcsQ0FBTyxhQUFxQjtJQUMvQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLEtBQUssU0FBUztZQUNaLE1BQU0sV0FBVyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUN6QyxLQUFLLENBQUE7UUFDUDtZQUNFLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDcEQsS0FBSyxDQUFBO0lBQ1QsQ0FBQztBQUNILENBQUMsQ0FBQSxDQUFBIn0=