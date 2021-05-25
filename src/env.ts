import path from 'path'

export default {
    state: 'development',
    cors: ['https://varelia.lucas-mercier.digital'],
    controllers: [path.resolve(__dirname, './api/presentation/controllers/**/*Controller.ts')],
    middlewares: [path.resolve(__dirname, './api/presentation/middlewares/**/*Middleware.ts')],
    app: {
        port: 8080
    }
}