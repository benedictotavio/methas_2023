import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils/jwt";

const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const accessToken = (req.headers.authorization?.split(' ')[1])

  console.log('Token = ' + accessToken)

  if (!accessToken) {
    return next();
  }

  const decoded = verifyJwt(accessToken, "accessTokenPublicKey");

  console.log("Decoced = " + decoded);

  if (decoded) {
    res.locals.user = decoded;
  } else {
    res.status(404).send('User not logged')
  }

  return next();

};

export default deserializeUser;