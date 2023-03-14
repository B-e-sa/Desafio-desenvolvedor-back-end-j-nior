import { Router } from 'express';
import { createClient, getClients } from '../controllers/controller';

const route = Router();

route.route('/api/v1/client')
    .get(getClients)
    .post(createClient);

export default route;