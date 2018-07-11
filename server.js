import express from 'express'
import bodyParser from 'body-parser'
import routes from './app/ship/core/routes/routes_boot'

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

app.use(allowCORS);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Start the routes
routes.registerRoutes(app)

//Default response for an unexistent URL
app.use(function (req, res) {
    res.status(404).send('URL ' + req.originalUrl + ' not found')
});

//Start Server
app.listen(port);
console.log('RESTful API server started on PORT: ' + port);
