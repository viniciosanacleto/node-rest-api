'use strict';
module.exports = function(app) {
  //Import Controllers
  var exampleController = require('../controllers/ExampleController');

  // Example Routes
  app.route('/example')
    .get(exampleController.all)
    .post(exampleController.create)
   app.route('/example/:id')
     .get(exampleController.byId)
     .delete(exampleController.delete)
     .put(exampleController.update)
};
