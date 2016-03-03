/// <reference path="../ts/typings/main.d.ts" />
var npmg = require("../dist/index.js");
var smartenv = require("smartenv");
var environment = smartenv.getEnv();
describe("npmg", function () {
    describe(".install()", function () {
        it("should install default list globally when parsed 'default' as argument", function () {
            if (environment.isC9 || environment.isCI) {
                this.timeout(60000);
                npmg.install("default");
            }
            ;
        });
    });
});
//# sourceMappingURL=test.js.map