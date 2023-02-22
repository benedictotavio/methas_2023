import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils/jwt";

const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const accessToken = (req.headers.authorization?.split(' ')[1])

  if (!accessToken) {
    return next();
  }

  const decoded = verifyJwt(accessToken, "accessTokenPublicKey");

  if (decoded) {
    res.locals.user = decoded;
  } else {
    res.status(404).send('User not logged')
  }

  return next();

};

export default deserializeUser;