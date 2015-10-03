///<reference path="../../../typings/tsd.d.ts" />
'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractEmployee = (function () {
    function AbstractEmployee(_name, _tel) {
        this._name = _name;
        this._tel = _tel;
    }
    Object.defineProperty(AbstractEmployee.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractEmployee.prototype, "tel", {
        get: function () {
            return this._tel;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractEmployee;
})();
exports.AbstractEmployee = AbstractEmployee;
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(_name, _tel) {
        _super.call(this, _name, _tel);
    }
    Employee.prototype.print = function () {
        console.log('Employee: ' + this.name);
    };
    Employee.prototype.getNumberOfEmployees = function () {
        return 1;
    };
    return Employee;
})(AbstractEmployee);
exports.Employee = Employee;
var Manager = (function (_super) {
    __extends(Manager, _super);
    function Manager(_name, _tel) {
        _super.call(this, _name, _tel);
        this._employees = [];
    }
    Manager.prototype.print = function () {
        console.log('Manager: ' + this.name);
        this._employees.forEach(function (employee) {
            employee.print();
        });
    };
    Manager.prototype.getNumberOfEmployees = function () {
        var numOfEmployees = 1;
        this._employees.forEach(function (employee) {
            numOfEmployees += employee.getNumberOfEmployees();
        });
        return numOfEmployees;
    };
    Manager.prototype.add = function (employee) {
        this._employees.push(employee);
    };
    Manager.prototype.remove = function (index) {
        this._employees.splice(index, 1);
    };
    Manager.prototype.get = function (index) {
        return this._employees[index];
    };
    return Manager;
})(AbstractEmployee);
exports.Manager = Manager;
