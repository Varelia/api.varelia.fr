import {ExpressMiddlewareInterface, Middleware} from 'routing-controllers'
import {Request, Response, NextFunction} from 'express'
import helmet from 'helmet'

@Middleware({type: 'before'})
export class SecurityMiddleware implements ExpressMiddlewareInterface {
    public use (request: Request, response: Response, next: NextFunction): any {
        return helmet()(request, response, next)
    }
}