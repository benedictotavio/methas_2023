import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils/jwt";
const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  
  console.log(req.headers.authorization);

  const accessToken = (req.headers.authorization || "").replace(
    /^Bearer\s/,
    ""
  );
  
    console.log(accessToken)

  if (!accessToken) {
    return next();
  }

  const decoded = verifyJwt(accessToken, "accessTokenPublicKey");

  console.log(decoded)

  if (decoded === true) {
    res.locals.user = decoded;
  }

  return next();
};

export default deserializeUser;