import { Router } from 'express';
import validateCredentials from '../middlewares/validateCredentials';
import { createClient, getClients, getByDate } from '../controllers/api.controller';

const apiRoute = Router();

apiRoute.post('/precatory', getByDate);

apiRoute.get('/client', getClients);

apiRoute.post('/client', validateCredentials, createClient);


export default apiRoute;