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
var CartService = (function () {
    function CartService(http) {
        this.http = http;
        this.cart = [];
        this.qty = 0;
        this.rewards = 0;
        this.totalPrice = 0;
        this.totalQuantity = 0;
        console.log('Cart Service Initialized.....');
    }
    CartService.prototype.addItem = function (inv) {
        if (inv.discountPercentage == 0) {
            console.log('No Rewards');
        }
        if (inv.discountPercentage == 20) {
            this.rewards += 20;
            console.log('20 Rewards');
        }
        if (inv.discountPercentage == 40) {
            console.log('40 Rewards');
            this.rewards += 40;
        }
        if (inv.discountPercentage == 70) {
            console.log('70 Rewards');
            this.rewards += 70;
        }
        this.cart.push(inv);
        this.totalPrice += inv.price;
        this.totalQuantity = this.qty + 1;
    };
    CartService.prototype.getQty = function () {
        return this.cart;
    };
    CartService.prototype.getRewards = function () {
        return this.rewards;
    };
    CartService.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    CartService.prototype.getQuantity = function () {
        return this.cart.length;
    };
    CartService.prototype.clearCart = function (cartItems) {
        this.cart = [];
        this.totalPrice = 0;
    };
    CartService.prototype.removeItem = function (cartItem) {
        this.cart = this.cart.filter(function (cart) { return cart.id != cartItem.id; });
        this.rewards -= cartItem.discountPercentage;
        this.totalPrice -= cartItem.price;
        return this.getQty();
    };
    return CartService;
}());
CartService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map