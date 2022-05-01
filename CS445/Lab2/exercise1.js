var University = /** @class */ (function () {
    function University(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    University.prototype.graduation = function (year) {
        console.log('Graduating ${this.dept} ${year} students');
    };
    return University;
}());
var miu = new University("MIU", "MSD");
miu.graduation(2021);
