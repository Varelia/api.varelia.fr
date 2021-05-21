import 'reflect-metadata';

import {bootstrapMicroframework} from 'microframework'
import ExpressLoader from './loaders'
import DependencyInjectionLoader from './loaders/DependencyInjectionLoader'

bootstrapMicroframework([
    DependencyInjectionLoader,
    ExpressLoader
])
    .then(_ => console.log(`[⚡] VareliaAPI started on port ${process.env.APP_PORT}!`))
    .catch(console.log)