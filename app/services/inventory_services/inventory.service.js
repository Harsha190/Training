"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var InventoryService = (function () {
    function InventoryService(http) {
        this.http = http;
    }
    InventoryService.prototype.getAllInventoryList = function () {
        return this.http.get('/inventory/all')
            .map(function (res) { return res.json(); });
    };
    InventoryService.prototype.getAllBooks = function () {
        return this.http.get('/inventory/books/all')
            .map(function (res) { return res.json(); });
    };
    InventoryService.prototype.getAllClothing = function () {
        return this.http.get('/inventory/clothing/all')
            .map(function (res) { return res.json(); });
    };
    InventoryService.prototype.getAllEntertainment = function () {
        return this.http.get('/inventory/entertainment/all')
            .map(function (res) { return res.json(); });
    };
    InventoryService.prototype.getAllStationary = function () {
        return this.http.get('/inventory/stationary/all')
            .map(function (res) { return res.json(); });
    };
    InventoryService.prototype.getAllApparells = function () {
        return this.http.get('/inventory/apparells/all')
            .map(function (res) { return res.json(); });
    };
    InventoryService.prototype.getInventorys = function (invId) {
        return this.http.get('/inventory/' + invId + '/all')
            .map(function (res) { return res.json(); });
    };
    return InventoryService;
}());
InventoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], InventoryService);
exports.InventoryService = InventoryService;
//# sourceMappingURL=inventory.service.js.map