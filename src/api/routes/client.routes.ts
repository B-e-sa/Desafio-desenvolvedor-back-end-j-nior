import { Router } from 'express';
import validation from '../middlewares/validation.middleware.';
import { createClient, getClients, getByDate } from '../controllers/client.controller';

const clientRoute = Router();

clientRoute.post('/precatory', getByDate);

clientRoute.get('/client', getClients);

clientRoute.post('/client', validation, createClient);


export default clientRoute;