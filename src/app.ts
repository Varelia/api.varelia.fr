import 'reflect-metadata';
import {bootstrapMicroframework} from 'microframework'
import {IoTInjectionLoader, ExpressLoader, WinstonLoader} from './loaders'
import env from './env'

bootstrapMicroframework([
    WinstonLoader,
    IoTInjectionLoader,
    ExpressLoader
])
    .then(_ => console.log(`[⚡] VareliaAPI started on port ${env.app.port}!`))
    .catch(console.log)