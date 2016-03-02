/// <reference path="./typings/main.d.ts" />
import plugins = require("./npmg.plugins");
let installExec = function(packageNames:string[]){
    for (let packageName in packageNames){
        plugins.shelljs.exec("npm install -g " + packageName);
    };
};

let defaultPackages = plugins.smartfile.readFileToObject("../default_packages.json");

let install = function(){
    installExec(defaultPackages);
};

export = install;