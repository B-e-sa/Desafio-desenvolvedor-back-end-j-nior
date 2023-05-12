import { NextFunction, Request, Response } from "express";
import { Client } from "../../database/entities/client/Client";
import clientRepository from "../../database/entities/client/ClientRepository";

const getByDate = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const { createdDate, finalDate } = req.body;

        const searchedPrecatory = await clientRepository.query(
            `SELECT * FROM clients WHERE created_at >= '${createdDate}' AND created_at <= '${finalDate}';`
        );

        res.status(200).send(searchedPrecatory);

    } catch (e) { next(e) }

}

const createClient = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const { cpf, phone, email, name } = req.body;

        const newClient = new Client();
        newClient.phone = phone;
        newClient.name = name;
        newClient.email = email;
        newClient.cpf = cpf;

        await clientRepository.save(newClient);

        res.sendStatus(201);


    } catch (e: any) { next(e) }
}

const getClients = async (_req: Request, res: Response) => {
    res.send(await clientRepository.find());
}

export { createClient, getClients, getByDate };

