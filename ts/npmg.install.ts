/// <reference path="./typings/main.d.ts" />
import plugins = require("./npmg.plugins");
import paths = require("./npmg.paths");
let installExec = function(packageNames:string[]){
    for (let packageName in packageNames){
        plugins.shelljs.exec("npm install -g " + packageName);
    };
};

let packageLibrary = plugins.smartfile.readFileToObject(
    plugins.path.join(paths.packageBase,"packageLibrary.json")
);

let install = function(packageSetArg:String){
    switch (packageSetArg){
        case "default":
            installExec(packageLibrary.default);
        default:
            plugins.beautylog.warn("no set has been specified");
    }
    installExec(packageLibrary.default);
};

export = install;