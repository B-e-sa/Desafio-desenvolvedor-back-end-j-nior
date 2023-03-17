import { Router } from 'express';
import { createClient, getClients } from '../controllers/api.controller';

const apiRoute = Router();

apiRoute.route('/api/v1/client')
    .get(getClients)
    .post(createClient);

export default apiRoute;