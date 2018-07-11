function routes(app) {
    app.route('/example')
        .get(function (req, res) {
            res.send('Welcome to Node Rest API')
        })
}

export default routes

