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
var User_1 = require("./User");
//A classe é um paramentro qu estamos passando aqui para nossa entidade
//o decoration, ou 'Entity' deve ser colocado sempre em cima da classe
//Ele está disponivél apenas no typescript
var Appointment = /** @class */ (function () {
    function Appointment() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid')
    ], Appointment.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Appointment.prototype, "provider_id");
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1["default"]; }),
        typeorm_1.JoinColumn({ name: 'provider_id' })
    ], Appointment.prototype, "provider");
    __decorate([
        typeorm_1.Column('timestamp with time zone')
    ], Appointment.prototype, "date");
    __decorate([
        typeorm_1.CreateDateColumn()
    ], Appointment.prototype, "created_at");
    __decorate([
        typeorm_1.UpdateDateColumn()
    ], Appointment.prototype, "updated_at");
    Appointment = __decorate([
        typeorm_1.Entity('appointments')
    ], Appointment);
    return Appointment;
}());
exports["default"] = Appointment;
