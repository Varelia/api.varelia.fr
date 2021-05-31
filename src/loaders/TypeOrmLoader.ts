import {MicroframeworkLoader, MicroframeworkSettings} from 'microframework'
import {Connection, ConnectionOptions, createConnection} from 'typeorm'
import config from '../ormconfig'


const TypeOrmLoader: MicroframeworkLoader = async (settings: MicroframeworkSettings | undefined) => {

    const connection: Connection = await createConnection(config as ConnectionOptions)

    if (settings) {
        settings.setData('connection', connection)
        settings.onShutdown(() => connection.close())
    }
}

export default TypeOrmLoader