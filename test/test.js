/// <reference path="../ts/typings/main.d.ts" 
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQThDO0FBQzlDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3ZDLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNuQyxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7QUFHaEMsUUFBUSxDQUFDLE1BQU0sRUFBQztJQUNaLFFBQVEsQ0FBQyxZQUFZLEVBQUM7UUFDbEIsRUFBRSxDQUFDLHdFQUF3RSxFQUFDO1lBQ3hFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUIsQ0FBQztZQUFBLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90cy90eXBpbmdzL21haW4uZC50c1wiIFxubGV0IG5wbWcgPSByZXF1aXJlKFwiLi4vZGlzdC9pbmRleC5qc1wiKTtcbmxldCBzbWFydGVudiA9IHJlcXVpcmUoXCJzbWFydGVudlwiKTtcbmxldCBlbnZpcm9ubWVudCA9IHNtYXJ0ZW52LmdldEVudigpO1xuXG5cbiAgICBkZXNjcmliZShcIm5wbWdcIixmdW5jdGlvbigpe1xuICAgICAgICBkZXNjcmliZShcIi5pbnN0YWxsKClcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgaXQoXCJzaG91bGQgaW5zdGFsbCBkZWZhdWx0IGxpc3QgZ2xvYmFsbHkgd2hlbiBwYXJzZWQgJ2RlZmF1bHQnIGFzIGFyZ3VtZW50XCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpZiAoZW52aXJvbm1lbnQuaXNDOSB8fCBlbnZpcm9ubWVudC5pc0NJKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0KDYwMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgbnBtZy5pbnN0YWxsKFwiZGVmYXVsdFwiKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
