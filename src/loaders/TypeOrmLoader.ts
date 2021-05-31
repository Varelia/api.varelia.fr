import {MicroframeworkLoader, MicroframeworkSettings} from 'microframework'
import {Connection, ConnectionOptions, createConnection} from 'typeorm'
import env from '../env'

const TypeOrmLoader: MicroframeworkLoader = async (settings: MicroframeworkSettings | undefined) => {

    console.log(env)

    const options: ConnectionOptions = {
        type: env.orm.driver as any,
        host: env.orm.host,
        port: env.orm.port as number,
        username: env.orm.db.username,
        password: env.orm.db.password,
        database: env.orm.db.name,
        entities: [env.orm.entities],
        synchronize: env.orm.db.sync as boolean,
        logging: true
    }

    const connection: Connection = await createConnection(options)

    if (settings) {
        settings.setData('connection', connection)
        settings.onShutdown(() => connection.close())
    }
}

export default TypeOrmLoader