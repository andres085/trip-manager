import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface RequestWithUser extends Request {
  user: any;
}

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1]; // Bearer <token>

    jwt.verify(token, "ultrasecretkey" as string, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      (req as RequestWithUser).user = user;
      next();
    });
  } else {
    return res.sendStatus(401);
  }
};
