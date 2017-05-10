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
var login_service_1 = require("../../services/login_services/login.service");
var orders_service_1 = require("../../services/orders_service/orders.service");
var cart_service_1 = require("../../services/cart_service/cart.service");
var inventory_service_1 = require("../../services/inventory_services/inventory.service");
var HomeComponent = (function () {
    function HomeComponent(loginService, orderService, inventoryService, cartService) {
        var _this = this;
        this.loginService = loginService;
        this.orderService = orderService;
        this.inventoryService = inventoryService;
        this.cartService = cartService;
        this.loggedInUser = JSON.parse(localStorage.getItem('currUser'));
        this.orderService.getOrders(this.loggedInUser.id)
            .subscribe(function (orders) {
            _this.orders = orders;
        });
    }
    HomeComponent.prototype.getProfile = function (name) {
        var _this = this;
        this.loginService.getUser(name).subscribe(function (users) {
            _this.users = users;
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-home',
        templateUrl: 'home.component.html'
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        orders_service_1.OrderService,
        inventory_service_1.InventoryService,
        cart_service_1.CartService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map