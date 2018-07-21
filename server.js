import express from 'express'
import {registerRoutes} from './app/ship/core/router'
import {registerMiddlewares} from './app/ship/core/middleware'

//Load Express
var app = express()
var port = process.env.PORT || 3000; //Port where server run.

//Set some Middlewares
registerMiddlewares(app)

//Start the routes
registerRoutes(app)

//Start the Server
try {
    app.listen(port)
    console.log('RESTful API server started on PORT: ' + port)
}
catch (e) {
    console.log('Server cannot be started!', e)
}
