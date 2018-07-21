import middlewares from '../../middlewares'
import internals from './internals'

export function registerMiddlewares(app) {
    // Register internal middlewares
    for (let imw of internals) {
        app.use(imw)
    }
    // Register external (custom) middlewares
    for (let mw of middlewares) {
        app.use(mw)
    }
}