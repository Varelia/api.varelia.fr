import 'reflect-metadata';
import {bootstrapMicroframework} from 'microframework'
import {IoTInjectionLoader, ExpressLoader, WinstonLoader, TypeOrmLoader} from './loaders'
import env from './env'

bootstrapMicroframework([
    WinstonLoader,
    IoTInjectionLoader,
    TypeOrmLoader,
    ExpressLoader
])
    .then(_ => console.log(`[⚡] VareliaAPI started on port ${env.app.port}!`))
    .catch(console.log)