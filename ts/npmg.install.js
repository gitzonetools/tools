/// <reference path="./typings/main.d.ts" />
var plugins = require("./npmg.plugins");
var installExec = function (packageNames) {
    for (var packageName in packageNames) {
        plugins.shelljs.exec("npm install -g " + packageName);
    }
    ;
};
var defaultPackages = plugins.smartfile.readFileToObject("../default_packages.json");
var install = function () {
    installExec(defaultPackages);
};
module.exports = install;
//# sourceMappingURL=npmg.install.js.map