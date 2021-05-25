import * as express from 'express';
import morgan from 'morgan';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';
import {Logger} from '../../lib/Logger'

@Middleware({ type: 'before' })
export class LogMiddleware implements ExpressMiddlewareInterface {

    private log = new Logger(__dirname);

    public use(req: express.Request, res: express.Response, next: express.NextFunction): any {
        return morgan('dev', {
            stream: {
                write: this.log.info.bind(this.log),
            },
        })(req, res, next);
    }

}