import {MicroframeworkLoader, MicroframeworkSettings} from 'microframework'
import {createExpressServer} from 'routing-controllers'
import {Application} from 'express'

const ExpressLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    const express: Application = createExpressServer({
        cors: true,
        classTransformer: true,
        defaultErrorHandler: false,
    })
    const server = express.listen(process.env.APP_PORT)

    settings?.setData('express_app', express)
    settings?.setData('express_server', server)
}

export default ExpressLoader