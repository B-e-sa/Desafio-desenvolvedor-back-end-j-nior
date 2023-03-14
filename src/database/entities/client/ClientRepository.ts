import AppDataSource from '../../data-source';
import { Client } from './Client';

const clientRepository = AppDataSource.getRepository(Client);

export default clientRepository