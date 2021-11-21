"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//REPRESENTAÇÃO DE COMO UM DADO É SALVO EM NOSSA APLICAÇÃO!
var uuidv4_1 = require("uuidv4");
var Appointment = /** @class */ (function () {
    //Passar parametros com informações préexistentes
    function Appointment(_a) {
        var provider = _a.provider, date = _a.date;
        this.id = (0, uuidv4_1.uuid)();
        this.provider = provider;
        this.date = date;
    }
    return Appointment;
}());
exports.default = Appointment;
