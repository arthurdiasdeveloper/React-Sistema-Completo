//AQUI DEVEMOS RECEBER A REQUISIÇÃO, CHAMAR OUTRO ARQUIVO, DEVOLVER UMA RESPOSTA

import { application, Router } from 'express';

//import { v4 as uuid } from 'uuid';

import { getCustomRepository } from 'typeorm';

import { parseISO } from 'date-fns';

import CreateAppointmentService from '../services/CreateAppointmentService';

//import Appointment from '../models/Appointment';

import AppointmentRepository from '../repositories/AppointmentsRepository';


const appointmentsRouter = Router();


appointmentsRouter.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentRepository);
  const appointments = await appointmentsRepository.find();

  return response.json(appointments);


})


appointmentsRouter.post('/', async (request, response) => {

  try {
    const { provider_id, date } = request.body;


    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService();

    const appointment = await createAppointment.execute({ date: parsedDate, provider_id });

    // appointments.push(appointment);

    return response.json(appointment);
  } catch (err: Error | any) {
    return response.status(400).json({ error: err.message });
  }

});

export default appointmentsRouter;
