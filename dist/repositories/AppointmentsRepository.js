"use strict";
//AQUI VAMOS TRABALHAR COM O DADO
//VAMOS LISTAR, CRIAR, EDITAR, DELETAR, ATUALIZAR
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Appointment_1 = __importDefault(require("../models/Appointment"));
var date_fns_1 = require("date-fns");
var AppointmentRepository = /** @class */ (function () {
    function AppointmentRepository() {
        this.appointments = [];
    }
    AppointmentRepository.prototype.all = function () {
        return this.appointments;
    };
    AppointmentRepository.prototype.findByDate = function (date) {
        var findAppointements = this.appointments.find(function (appointment) {
            return (0, date_fns_1.isEqual)(date, appointment.date);
        });
        return findAppointements || null;
    };
    AppointmentRepository.prototype.create = function (_a) {
        var provider = _a.provider, date = _a.date;
        var appointment = new Appointment_1.default({ provider: provider, date: date });
        this.appointments.push(appointment);
        return appointment;
    };
    return AppointmentRepository;
}());
exports.default = AppointmentRepository;
