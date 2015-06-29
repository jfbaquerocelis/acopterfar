var membersControllers = require('../controllers/members'),
	membersRouter = function (router) {
		router.get('/members', membersControllers)
	}

module.exports = membersRouter;