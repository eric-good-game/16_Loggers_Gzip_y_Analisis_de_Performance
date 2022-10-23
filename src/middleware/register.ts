import { NextFunction, Request, Response } from "express";
import logger from "../config/loggerConfig";

const register = (req:Request,res:Response, next:NextFunction) =>{
    logger.info(`Petición a la ruta ${req.url} con método ${req.method}.`);
    next();
}

export default register;