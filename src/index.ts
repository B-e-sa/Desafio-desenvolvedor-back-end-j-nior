import express from "express";
import "reflect-metadata";
import AppDataSource from "./database/data-source";
import clientRoute from "./api/routes/client.routes";
import errorHandler from './api/middlewares/errorHandler.middleware'

const app = express();

app.use(express.json());
app.use('/api/', clientRoute);
app.use(errorHandler)

app.listen(3000, () => console.log("Server running on port 3000!"))

AppDataSource.initialize()
    .then(() => console.log("PSQL Database running on port 5432!"))
    .catch((e: any) => { throw new Error(e) });