var regulationControllers = require('../controllers/regulations'),
	regulationRouter = function (router) {
		router.get('/regulations', regulationControllers)
	}

module.exports = regulationRouter