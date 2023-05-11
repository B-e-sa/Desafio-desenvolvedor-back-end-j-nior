import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'

const errorHandler: ErrorRequestHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.status(500).send({
        message: 'Algum erro ocorreu no servidor. ' + err
    })
}

export default errorHandler