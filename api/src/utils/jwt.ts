import jwt from "jsonwebtoken";
import config from "config";

export function signJwt(
  object: Object,
  keyName: "accessTokenPrivateKey" | "refreshTokenPrivateKey",
  options?: jwt.SignOptions | undefined
) {

  const privateKey = Buffer.from(config.get<string>(keyName), "base64").toString("ascii")

  return jwt.sign(object, privateKey, {
    expiresIn: "15m",
    algorithm: 'RS256'
  });
}

export function verifyJwt<T>(
  token: string | undefined,
  keyName: "accessTokenPublicKey" | "refreshTokenPublicKey",
): object | T {

  const publicKey = Buffer.from(config.get<string>(keyName), "base64").toString("ascii");


  try {
    const decoded = jwt.verify(token, publicKey, {
      algorithms: ['RS256']
    }) as T | object;
    return decoded;
  } catch (err) {
    return { err };
  }
}