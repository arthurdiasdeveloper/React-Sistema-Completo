//AQUI DEVEMOS RECEBER A REQUISIÇÃO, CHAMAR OUTRO ARQUIVO, DEVOLVER UMA RESPOSTA

import { application, Router } from 'express';

import CreateuserService from '../services/CreateUserService';


const useresRouter = Router();



useresRouter.post('/', async (request, response) => {

  try {

    const { name, email, password } = request.body;

    const createUser = new CreateuserService();

    const user = await createUser.execute({
      name,
      email,
      password,

    });

    delete user.password;

    return response.json(user);

  } catch (err: Error | any) {
    return response.status(400).json({ error: err.message });
  }

});

export default useresRouter;
