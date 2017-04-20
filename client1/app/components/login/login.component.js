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
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.data = {};
    }
    LoginComponent.prototype.getUser = function (event) {
        var _this = this;
        event.preventDefault();
        var currentUser = {
            name: this.data.uname,
            password: this.data.pswd
        };
        this.loginService.authenticateUser(currentUser.name, currentUser.password)
            .subscribe(function (data) {
            if (data.loginId == currentUser.name && data.password == currentUser.password) {
                localStorage.setItem('currUser', JSON.stringify(data));
                _this.router.navigate(['home']);
            }
            else {
                alert('Invalid User or Password!!');
                // this.users = users;
            }
        }, function (error) {
            alert('Failed!!!');
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-login',
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        login_service_1.LoginService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map