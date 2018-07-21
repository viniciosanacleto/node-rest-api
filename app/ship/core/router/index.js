//Import Register Containers File
import containers from '../../../containers'

/**
 * Register routes from registered containers file
 * @param app
 */
function registerRoutes(app) {
    //For each registered container
    for (let container of containers) {
        //For each route file in registered container
        for (let route of container.routes) {
            //For each endpoint in route file
            for (let endpoint of route.endpoints) {
                //If the endpoint has an version insert them before
                //ex.: http://.../version/endpoint
                if (route.version) {
                    app.route(`/${route.version}${endpoint.path}`)[endpoint.method](endpoint.handle)
                }
                else {
                    app.route(endpoint.path)[endpoint.method](endpoint.handle)
                }
            }
        }
    }

    //Register 404 response
    app.use(function (req, res) {
        res.status(404).send('Endpoint ' + req.originalUrl + ' not found')
    });
}

export default {
    registerRoutes
}