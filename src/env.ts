import path from 'path'
import * as dotenv from 'dotenv'

dotenv.config({
    path: path.join(__dirname, '../.env')
})

console.log(path.join(__dirname, process.env.ORM_ENTITIES as string))

export default {
    state: 'development',
    cors: ['https://varelia.lucas-mercier.digital'],
    controllers: [path.resolve(__dirname, './api/presentation/controllers/**/*Controller.ts')],
    middlewares: [path.resolve(__dirname, './api/presentation/middlewares/**/*Middleware.ts')],
    app: {
        port: 8080
    }
}