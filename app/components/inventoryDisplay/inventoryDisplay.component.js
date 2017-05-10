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
var router_1 = require("@angular/router");
var cart_service_1 = require("../../services/cart_service/cart.service");
var inventory_service_1 = require("../../services/inventory_services/inventory.service");
var InventoryDisplayComponent = (function () {
    function InventoryDisplayComponent(router, route, inventoryService, cartService) {
        this.router = router;
        this.route = route;
        this.inventoryService = inventoryService;
        this.cartService = cartService;
    }
    InventoryDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.invId = this.route.params.subscribe(function (params) {
            var inId = params['id'];
            _this.inventoryService.getInventorys(inId)
                .subscribe(function (inventorys) {
                _this.inventorys = inventorys;
            });
        });
    };
    InventoryDisplayComponent.prototype.ngOnDestroy = function () {
        console.log('Destroy Called');
    };
    InventoryDisplayComponent.prototype.addToCart = function (inv) {
        this.cartService.addItem(inv);
    };
    return InventoryDisplayComponent;
}());
InventoryDisplayComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-inventoryDisplay',
        templateUrl: 'inventoryDisplay.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        inventory_service_1.InventoryService,
        cart_service_1.CartService])
], InventoryDisplayComponent);
exports.InventoryDisplayComponent = InventoryDisplayComponent;
//# sourceMappingURL=inventoryDisplay.component.js.map