import { validate } from "email-validator"

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

const validateCredentials = ({ cpf, phone, name, email }: ICredentials) => {

    const errors: IErrors = {};

    if (!validate(email))
        errors.email = "invalid email";

    if (cpf?.length !== 11 || !cpf.match(/^\d+$/))
        errors.cpf = "invalid cpf";

    if (phone?.length !== 11)
        errors.phone = "invalid phone number";

    // the regex will validate if the name isn't just spaces
    if (name?.replace(/\s/g, '').length == 0)
        errors.name = "invalid name";

    return errors;

}

export default validateCredentials;