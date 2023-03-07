import mongoose, { ConnectOptions } from "mongoose";
import config from 'config'
import log from "./logger";

const connect = async (): Promise<void> => {
    try {
        await mongoose
            .connect(config.get<string>('mongo_uri'), {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            } as ConnectOptions)
            .then((db: { connection: { host: string } }): void => console.log('MongoDB Conected! on ' + db.connection.host))
            .catch((err: unknown) => console.error(err))
    } catch (error) {
        log.error('Connect to fail MongoDB')
    }

}

export default connect