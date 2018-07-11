//Import Register Containers File
import containers from '../../../containers'

/**
 * Register routes from registered containers file
 * @param app
 */
function registerRoutes(app) {
    //For each registered container
    for (let container of containers) {
        //For each route in registered container
        for (let route of container.routes) {
            //Register route dynamically
            app.route(route.path)[route.method](route.handle)
        }
    }
}

export default {
    registerRoutes
}