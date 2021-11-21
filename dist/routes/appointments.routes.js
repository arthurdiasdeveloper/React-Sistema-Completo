"use strict";
//AQUI DEVEMOS RECEBER A REQUISIÇÃO, CHAMAR OUTRO ARQUIVO, DEVOLVER UMA RESPOSTA
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
//import { v4 as uuid } from 'uuid';
var date_fns_1 = require("date-fns");
var CreateAppointmentService_1 = __importDefault(require("../services/CreateAppointmentService"));
//import Appointment from '../models/Appointment';
var AppointmentsRepository_1 = __importDefault(require("../repositories/AppointmentsRepository"));
var appointmentsRouter = (0, express_1.Router)();
var appointmentsRepository = new AppointmentsRepository_1.default();
appointmentsRouter.get('/', function (request, response) {
    var appointments = appointmentsRepository.all();
    return response.json(appointments);
});
/* //Informações para serem contidas em um Array
interface Appointment {
  id: string;
  provider: string;
  date: Date;
} */
//Array de appointments. Com o Appointment com dois pontos, eu consigo pegar
//as informações contidas dentro do appointment.
//const appointments: Appointment[] = [];
appointmentsRouter.post('/', function (request, response) {
    try {
        var _a = request.body, provider = _a.provider, date = _a.date;
        var parsedDate = (0, date_fns_1.parseISO)(date);
        var createAppointment = new CreateAppointmentService_1.default(appointmentsRepository);
        var appointment = createAppointment.execute({ date: parsedDate, provider: provider });
        // appointments.push(appointment);
        return response.json(appointment);
    }
    catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
exports.default = appointmentsRouter;
