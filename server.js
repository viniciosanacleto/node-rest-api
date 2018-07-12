import express from 'express'
import bodyParser from 'body-parser'
import router from './app/ship/core/router'

//Load Express
var app = express()
var port = process.env.PORT || 3000; //Port where server run.

/**
 * CORS configuration
 * !! Reconfigure for deploy !!
 **/
var allowCORS = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '127.0.0.1:3000');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');

    next();
}

//Set some configure to Express
app.use(allowCORS);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Start the routes
router.registerRoutes(app)

//Start Server
try {
    app.listen(port)
    console.log('RESTful API server started on PORT: ' + port);
}
catch (e) {
    console.log('Server cannot be started!', e)
}
