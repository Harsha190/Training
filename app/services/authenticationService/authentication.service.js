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
var angular2_jwt_1 = require("angular2-jwt");
var angular2_jwt_2 = require("angular2-jwt");
var AuthenticationService = (function () {
    function AuthenticationService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.loggedIn = false;
    }
    AuthenticationService.prototype.logout = function () {
        this.authToken = null;
        localStorage.clear();
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('currUser');
        this.authToken = token;
        if (this.authToken == null) {
            return angular2_jwt_1.tokenNotExpired();
        }
        else {
            return !angular2_jwt_1.tokenNotExpired();
        }
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        angular2_jwt_2.JwtHelper])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map