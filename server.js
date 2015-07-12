var express = require('express'),
	swig = require('swig');

var server = express();
router = express.Router();

server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', './app/views');

server.use(express.static(__dirname + '/public'))
server.use(router)

swig.setDefaults({
	cache : false
});

var homeRouter = require('./app/routers/r.home')
var whoRouter = require('./app/routers/r.who')
var regulationRouter = require('./app/routers/r.regulations')
var contactRouter = require('./app/routers/r.contact')
var membersRouter = require('./app/routers/r.members')
var statutesRouter = require('./app/routers/r.statutes')
homeRouter(router)
whoRouter(router)
regulationRouter(router)
contactRouter(router)
membersRouter(router)
statutesRouter(router)

server.listen(18484, function () {
	console.log('Servidor Corriendo en http://127.0.0.1:18484')
})