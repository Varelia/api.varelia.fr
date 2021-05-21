import 'reflect-metadata';

import {bootstrapMicroframework} from 'microframework'
import {DependencyInjectionLoader, ExpressLoader} from './loaders'
bootstrapMicroframework([
    DependencyInjectionLoader,
    ExpressLoader
])
    .then(_ => console.log(`[⚡] VareliaAPI started on port ${process.env.APP_PORT}!`))
    .catch(console.log)