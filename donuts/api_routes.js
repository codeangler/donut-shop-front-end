var apiRouter = require('express').Router()

var donutController = require('./d_controller')

// http://localhost/api/v0/donuts
apiRouter.route('/donuts')
    .get(donutController.all)
    .post(donutController.create)

// http://localhost/api/v0/donuts/:id
apiRouter.route('/donuts/:id')
    .get(donutController.single)
    .put(donutController.update)
    .delete(donutController.destroy)

module.exports = apiRouter
