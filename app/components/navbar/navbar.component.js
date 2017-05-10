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
var task_service_1 = require("../../services/task.service");
var login_service_1 = require("../../services/login_services/login.service");
var home_service_1 = require("../../services/home_services/home.service");
var authentication_service_1 = require("../../services/authenticationService/authentication.service");
var orders_service_1 = require("../../services/orders_service/orders.service");
var inventory_service_1 = require("../../services/inventory_services/inventory.service");
var cart_service_1 = require("../../services/cart_service/cart.service");
var common_service_1 = require("../../services/common_services/common.service");
var router_1 = require("@angular/router");
var angular2_jwt_1 = require("angular2-jwt");
var NavbarComponent = (function () {
    function NavbarComponent(router, authenticationService, orderService, inventoryService, commonService, cartService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.orderService = orderService;
        this.inventoryService = inventoryService;
        this.commonService = commonService;
        this.cartService = cartService;
        this.loggedIn = false;
        console.log('App Component Initialized...');
        this.inventoryService.getAllInventoryList()
            .subscribe(function (inventoryList) {
            _this.inventoryList = inventoryList;
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.getTotalQuantity = function () {
        this.cartService.getQty();
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        console.log('Destroy called');
    };
    NavbarComponent.prototype.getOrders = function () {
        var _this = this;
        console.log('UserId', this.commonService.getUserId());
        this.orderService.getOrders(this.commonService.getUserId())
            .subscribe(function (orders) {
            _this.orders = orders;
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-navbar',
        templateUrl: 'navbar.component.html',
        providers: [task_service_1.TaskService, login_service_1.LoginService,
            home_service_1.HomeService, orders_service_1.OrderService,
            authentication_service_1.AuthenticationService, inventory_service_1.InventoryService,
            cart_service_1.CartService, angular2_jwt_1.JwtHelper, common_service_1.CommonService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        authentication_service_1.AuthenticationService,
        orders_service_1.OrderService,
        inventory_service_1.InventoryService,
        common_service_1.CommonService,
        cart_service_1.CartService])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map