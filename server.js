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
homeRouter(router)
whoRouter(router)
regulationRouter(router)
contactRouter(router)


server.get('/Normatividad', function (req, res) {
	res.render('normatividad')
})
server.get('/Contacto', function (req, res) {
	res.render('contac')
})
server.get('/Congreso', function (req, res) {
	res.render('congress')
})

server.listen(18484, function () {
	console.log('Servidor Corriendo en http://127.0.01:18484')
})