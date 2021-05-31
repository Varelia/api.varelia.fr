import path from 'path'
import * as dotenv from 'dotenv'

dotenv.config({
    path: path.join(__dirname, '../.env')
})

export default {
    state: 'development',
    cors: ['https://varelia.lucas-mercier.digital'],
    controllers: [path.resolve(__dirname, './api/presentation/controllers/**/*Controller.ts')],
    middlewares: [path.resolve(__dirname, './api/presentation/middlewares/**/*Middleware.ts')],
    app: {
        port: 8080
    },
    orm: {
        driver: process.env.ORM_DRIVER || 'mysql',
        host: process.env.ORM_HOST || 'localhost',
        port: process.env.ORM_PORT || 3306,
        db: {
            username: process.env.ORM_DB_USERNAME || 'root',
            password: process.env.ORM_DB_PASSWORD || '',
            name: process.env.ORM_DB_NAME || 'varelia',
            sync: process.env.ORM_DB_SYNC || false,
        }
    }
}