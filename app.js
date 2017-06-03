var express        = require( 'express' );
var http           = require( 'http' );

var app            = express();

app.set('view engine', 'ejs');

app.set( 'port', process.env.PORT || 3001 );

app.get('/', function (req, res) {
    res.render('index');
});

http.createServer( app ).listen( app.get( 'port' ), function (){
  console.log( 'Express server listening on port ' + app.get( 'port' ));
});