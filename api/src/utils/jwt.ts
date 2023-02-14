import jwt from "jsonwebtoken";
import config from "config";

export function signJwt(
  object: Object,
  keyName: "accessTokenPrivateKey" | "refreshTokenPrivateKey",
  options?: jwt.SignOptions | undefined
) {

  const signingKey = Buffer.from(config.get<string>(keyName), "base64").toString("ascii")

  console.log("signingKey = ")
  console.log(signingKey)



  return jwt.sign(object, signingKey, {
    expiresIn: "15m",
    algorithm: "RS256"
  });
}

export function verifyJwt<T>(
  token: string,
  keyName: "accessTokenPublicKey" | "refreshTokenPublicKey"
): T | object {
  const publicKey = Buffer.from(config.get<string>(keyName), "base64").toString("ascii");

  console.log('publicKey = ' + publicKey);

  try {
    const decoded = jwt.verify(token, publicKey) as T;
    return decoded;
  } catch (e) {
    return { message: "O Token é inválido!" }
  }
}