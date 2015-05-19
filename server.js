var express = require('express'),
	swig = require('swig');

var server = express();

server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', './app/views');

server.use(express.static(__dirname + '/public'))

swig.setDefaults({
	cache : false
});

server.get('/', function (req, res) {
	res.render('index')
})
server.get('/who', function (req, res) {
	res.render('who')
})
server.get('/Normatividad', function (req, res) {
	res.render('regulations')
})
server.get('/Contacto', function (req, res) {
	res.render('contac')
})
server.get('/Congreso', function (req, res) {
	res.render('congress')
})

server.listen(18484, function () {
	console.log('Servidor Corriendo en http://127.0.01:3000')
})