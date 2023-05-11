import { Router } from 'express';
import validation from '../middlewares/validation.middleware.';
import { createClient, getClients, getByDate } from '../controllers/client.controller';

const apiRoute = Router();

apiRoute.post('/precatory', getByDate);

apiRoute.get('/client', getClients);

apiRoute.post('/client', validation, createClient);


export default apiRoute;