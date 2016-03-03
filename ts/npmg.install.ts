/// <reference path="./typings/main.d.ts" />
import plugins = require("./npmg.plugins");
import paths = require("./npmg.paths");
let installExec = function(packageNames:string[]){
    for (let packageName in packageNames){
        let execCommand = "npm install -g " + packageNames[packageName];
        plugins.beautylog.info("now installing " + packageNames[packageName]);
        plugins.shelljs.exec(execCommand);
    };
};

let packageLibrary = plugins.smartfile.readFileToObject(
    plugins.path.join(paths.packageBase,"packageLibrary.json")
);

let install = function(packageSetArg:String){
    switch (packageSetArg){
        case "default":
            installExec(packageLibrary.default);
            break;
        default:
            plugins.beautylog.warn("no set has been specified");
            break;
    }
};

export = install;