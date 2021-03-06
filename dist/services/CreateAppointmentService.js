"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Responsavel somente pela criação do agendamento
var date_fns_1 = require("date-fns");
var CreateAppointmentService = /** @class */ (function () {
    function CreateAppointmentService(appointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository;
    }
    CreateAppointmentService.prototype.execute = function (_a) {
        var date = _a.date, provider = _a.provider;
        var appointmentDate = (0, date_fns_1.startOfHour)(date);
        var findAppointementInSameDate = this.appointmentsRepository.findByDate(appointmentDate);
        if (findAppointementInSameDate) {
            throw Error('This appointment is already booked!');
        }
        var appointment = this.appointmentsRepository.create({
            provider: provider,
            date: appointmentDate,
        });
        return appointment;
    };
    return CreateAppointmentService;
}());
exports.default = CreateAppointmentService;
