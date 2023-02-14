const dotenv = require('dotenv')
dotenv.config()

export default {
    port: 3030,
    logLevel: 'info',
    mongo_uri: 'mongodb+srv://benedictotavio:fle68y9eFm4RSU5U@methasdb.qme12ke.mongodb.net/?retryWrites=true&w=majority',
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