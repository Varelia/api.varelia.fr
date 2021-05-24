import {MicroframeworkLoader, MicroframeworkSettings} from 'microframework'
import {createExpressServer} from 'routing-controllers'
import {Application} from 'express'
import env from '../env'

const ExpressLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    const express: Application = createExpressServer({
        cors: {
            origin: env.cors
        },
        classTransformer: true,
        defaultErrorHandler: false,

        middlewares: env.middlewares,
        controllers: env.controllers
    })
    const server = express.listen(env.app.port)

    settings?.setData('express_app', express)
    settings?.setData('express_server', server)
}

export default ExpressLoader