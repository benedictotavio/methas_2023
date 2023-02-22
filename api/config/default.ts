import dotenv from 'dotenv'
dotenv.config()

export default {
    port: 3030,
    logLevel: 'info',
    mongo_uri:process.env.MONGO_URI,
    accessTokenPrivateKey: process.env.ACCESS_TOKEN_PRIVATE_KEY,
    refreshTokenPrivateKey: process.env.REFRESH_PRIVATE_KEY,
    accessTokenPublicKey: process.env.ACCESS_TOKEN_PUBLIC_KEY,
    refreshTokenPublicKey:process.env.REFRESH_PUBLIC_KEY,
    smtp: {
        user: 'fsfi7whln3cag4nn@ethereal.email',
        pass: 'TBFrznKxsUd24VwFk5',
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false
    }
}