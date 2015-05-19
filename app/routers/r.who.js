var whoControllers = require('../controllers/who'),
	whoRouter = function (router) {
		router.get('/who', whoControllers)
	}

module.exports = whoRouter