import { DataSource } from 'typeorm';
import { Client } from './entities/client/Client';

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "forms_answers",
    entities: [Client],
    synchronize: true,
    logging: false
})

export default AppDataSource;