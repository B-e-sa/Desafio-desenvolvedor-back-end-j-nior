import { Request, Response } from "express";
import { Client } from "../../database/entities/client/Client";
import clientRepository from "../../database/entities/client/ClientRepository";
import validateCredentials from "../../utils/validateCredentials";

const createClient = async (req: Request, res: Response) => {

    try {

        const { cpf, phone, email, name } = req.body;

        const errors = validateCredentials({ cpf, phone, name, email });

        if (Object.keys(errors).length === 0) { // if req has no errors

            const newClient = new Client();
            newClient.phone = phone;
            newClient.name = name;
            newClient.email = email;
            newClient.cpf = cpf;

            await clientRepository.save(newClient);

            res.sendStatus(200);

        } else {
            res.status(400).send({
                status: 400,
                message: "invalid credentials",
                errors: errors
            })
        }


    } catch (e: any) {

        res.status(400).send({
            code: e.code,
            detail: e.detail,
            name: e.name,
            routine: e.routine
        });
        
    }
}

const getClients = async (_req: Request, res: Response) => {
    res.send(await clientRepository.find());
}

export { createClient, getClients };

