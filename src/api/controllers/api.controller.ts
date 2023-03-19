import { Request, Response } from "express";
import { Client } from "../../database/entities/client/Client";
import clientRepository from "../../database/entities/client/ClientRepository";
import validateCredentials from "../middlewares/validateCredentials";

const getByDate = async (req: Request, res: Response) => {

    try {

        const { createdDate, finalDate } = req.body;

        const searchedPrecatory = await clientRepository.query(
            `SELECT * FROM clients WHERE created_at >= '${createdDate}' AND created_at <= '${finalDate}';`
        );

        res.status(200).send(searchedPrecatory);

    } catch (e) {

        res.status(400).send({
            error: {
                message: "invalid create or final date",
            }
        })

    }

}

const createClient = async (req: Request, res: Response) => {

    try {

        const { cpf, phone, email, name } = req.body;

        const newClient = new Client();
        newClient.phone = phone;
        newClient.name = name;
        newClient.email = email;
        newClient.cpf = cpf;

        await clientRepository.save(newClient);

        res.sendStatus(200);


    } catch (e: any) {

        const { code, detail, name, routine } = e;

        res.status(400).send({
            error: {
                message: "email or cpf already in use",
                code: code,
                detail: detail,
                name: name,
                routine: routine
            },
        });

    }
}

const getClients = async (_req: Request, res: Response) => {
    res.send(await clientRepository.find());
}

export { createClient, getClients, getByDate };

