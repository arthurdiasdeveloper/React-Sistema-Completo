import { Router } from 'express';

import appointmentsRouter  from './appointments.routes';
import useresRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();


routes.use('/appointments', appointmentsRouter);


routes.use('/users', useresRouter);


routes.use('/sessions', sessionsRouter);


/* routes.post ('/users', (request, response )=>{
  const { name, email } = request.body;

  const user ={
    name,
    email,
  };

  return response.json(user);
});
 */
export default routes;
