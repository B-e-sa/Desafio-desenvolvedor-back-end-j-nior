import { validate } from "email-validator"
import { NextFunction, Request, Response } from "express"

interface IErrors {
    email?: string
    cpf?: string
    phone?: string
    name?: string
}

export interface ICredentials {
    email: string
    cpf: string
    phone: string
    name: string
}

const validateCredentials = (req: Request, res: Response, next: NextFunction) => {

    console.log("oiii")

    const { email, cpf, phone, name } = req.body;

    const errors: IErrors = {};

    if (!validate(email))
        errors.email = "invalid email";

    // the regex will validate if the cpf doesn't contain spaces and is just numbers
    if (cpf?.length !== 11 || !cpf.match(/^\d+$/) || !cpf)
        errors.cpf = "invalid cpf";

    if (phone?.length !== 11)
        errors.phone = "invalid phone number";

    // the regex will validate if the name doesn't just spaces
    if (name?.replace(/\s/g, '').length == 0 || !name)
        errors.name = "invalid name";

    if (Object.keys(errors).length !== 0) {
        return res.status(400).send({
            error: {
                message: "invalid credentials",
                ...errors
            },
        });
    }

    next();

}

export default validateCredentials;