"use strict";
//REPRESENTAÇÃO DE COMO UM DADO É SALVO EM NOSSA APLICAÇÃO!
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
//A classe é um paramentro qu estamos passando aqui para nossa entidade
//o decoration, ou 'Entity' deve ser colocado sempre em cima da classe
//Ele está disponivél apenas no typescript
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid')
    ], User.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "name");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "email");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "password");
    __decorate([
        typeorm_1.CreateDateColumn()
    ], User.prototype, "created_at");
    __decorate([
        typeorm_1.UpdateDateColumn()
    ], User.prototype, "updated_at");
    User = __decorate([
        typeorm_1.Entity('users')
    ], User);
    return User;
}());
exports["default"] = User;
