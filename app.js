// CALL THE PACKAGES
var express = require('express');
var postcssMiddleware = require('postcss-middleware');
var autoprefixer = require('autoprefixer');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var connectSSI = require('connect-ssi');
var myip = require('quick-local-ip');
var mime = require('mime');
// localhost:1337 (or a port of your choosing)
var port = process.env.PORT || 1337;

app.use(connectSSI({
  ext: '.html',
  baseDir: path.join(__dirname, '/public/')
}));

app.locals.pretty = true;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// the root of your host will be the 'public' folder
app.use(express.static('public'));

app.use(function(req, res, next) {
// allow cross server resources
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \Authorization');
  next();
});
// log non-200 HTML responses to console
app.use(morgan('dev'));

app.get('/:route', function(req, res) {
  if (req.params.route.indexOf('.').length) {
    console.log('pass');
  }
  else {
    res.redirect(req.params.route + '.html');
    console.log(req.params.route);
  }
});

app.listen(port);
console.log('localhost:' + port + ' for local or ' + myip.getLocalIP4() + ':1337 for devices');
