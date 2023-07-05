import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/customError";

export const errorsMiddleware = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  console.error("Error in errors middleware:\n", err.stack);
  res.status(err.code || 500).send({ success: false, message: err.message });
};
