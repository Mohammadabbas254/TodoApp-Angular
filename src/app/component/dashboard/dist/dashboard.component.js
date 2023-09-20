"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardComponent = void 0;
var core_1 = require("@angular/core");
var task_1 = require("src/app/model/task");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(crudService) {
        this.crudService = crudService;
        this.taskObj = new task_1.Task();
        this.taskArr = [];
        this.addTaskValue = '';
        this.editTaskValue = '';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.addTaskValue = '';
        this.editTaskValue = '';
        this.taskObj = new task_1.Task();
        this.taskArr = [];
        this.getAllTask();
    };
    DashboardComponent.prototype.getAllTask = function () {
        var _this = this;
        this.crudService.getAllTask().subscribe(function (res) {
            _this.taskArr = res;
        }, function (err) {
            alert("Unable to get list of Tasks");
        });
    };
    DashboardComponent.prototype.addTask = function () {
        var _this = this;
        this.taskObj.task_name = this.addTaskValue;
        this.crudService.addTask(this.taskObj).subscribe(function (res) {
            _this.ngOnInit();
            _this.addTaskValue = '';
        }, function (err) {
            alert(err);
        });
    };
    DashboardComponent.prototype.editTask = function () {
        var _this = this;
        this.taskObj.task_name = this.editTaskValue;
        this.crudService.editTask(this.taskObj).subscribe(function (res) {
            _this.ngOnInit();
        }, function (err) {
            alert("Failed to update task");
        });
    };
    DashboardComponent.prototype.deleteTask = function (etask) {
        var _this = this;
        this.crudService.deleteTask(etask).subscribe(function (res) {
            _this.ngOnInit();
        }, function (err) {
            alert("Failed to delete task");
        });
    };
    DashboardComponent.prototype.call = function (etask) {
        this.taskObj = etask;
        this.editTaskValue = etask.task_name;
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
