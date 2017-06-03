var express        = require( 'express' );
var http           = require( 'http' );

var app            = express();

// controller
var todoController = require('./controllers/todoController');



// ejs (template engine)
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

app.set( 'port', process.env.PORT || 3001 );

// fire controller
todoController(app);




http.createServer( app ).listen( app.get( 'port' ), function (){
  console.log( 'Express server listening on port ' + app.get( 'port' ));
});