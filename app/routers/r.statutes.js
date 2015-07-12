var statutesControllers = require('../controllers/statutes'),
	statutesRouter = function (router) {
		router.get('/statutes', statutesControllers)
	}

module.exports = statutesRouter;