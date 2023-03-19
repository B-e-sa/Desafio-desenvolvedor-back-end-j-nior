import express from "express";
import "reflect-metadata";
import AppDataSource from "./database/data-source";
import route from "./api/routes/api.routes";

const app = express();

app.use(express.json());
app.use('/api/v1', route);

app.listen(3000, () => console.log("Server running on port 3000!"))

AppDataSource.initialize()
    .then(() => console.log("PSQL Database running on port 5432!"))
    .catch((e: any) => { throw new Error(e) });