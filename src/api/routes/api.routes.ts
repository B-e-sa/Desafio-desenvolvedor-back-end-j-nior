import { Router } from 'express';
import { createClient, getClients, getByDate } from '../controllers/api.controller';

const apiRoute = Router();

apiRoute.route('/api/v1/client/precatory')
    .post(getByDate)

apiRoute.route('/api/v1/client')
    .get(getClients)
    .post(createClient);

export default apiRoute;