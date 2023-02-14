import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import config from 'config'
import morgan from 'morgan'
import routerMetha from './routes/methas.routes'
import connect from "./utils/connectDB"
import routerAuth from "./routes/auth.routes"
import routerUser from "./routes/user.routes"
import log from "./utils/logger"
import deserializeUser from "./middlewares/deserialiazeUser"

const app = express()

app.use(express.json())

// middlewares
app.use(deserializeUser)

app.use(morgan('tiny'))

const PORT = config.get('port') || 3030


app.use('/api/metha', routerMetha)
app.use('/api/users', routerUser)
app.use('/api/auth', routerAuth)

app.listen(PORT, () => {
    try {
        log.info(`App started at http://localhost${PORT}`)
        connect()
    } catch (error) {
        throw error
    }
})