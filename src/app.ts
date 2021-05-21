import 'reflect-metadata';
import {bootstrapMicroframework} from 'microframework'
import {DependencyInjectionLoader, ExpressLoader} from './loaders'
import env from './env'

bootstrapMicroframework([
    DependencyInjectionLoader,
    ExpressLoader
])
    .then(_ => console.log(`[⚡] VareliaAPI started on port ${env.app.port}!`))
    .catch(console.log)