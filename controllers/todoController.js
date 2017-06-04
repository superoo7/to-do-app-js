var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//
var mlabConnection = process.env.MLABKEY;

// connect to the database
mongoose.connect(mlabConnection);

//Create a schema (blueprint)
var todoSchema = new mongoose.Schema({
    item: String
});

// Create a model
var Todo = mongoose.model('Todo', todoSchema);

// Create an item of the data and save it

// add item
// var itemOne = Todo({item: 'get flowers'}).save(function(err){
//     if (err) throw err;
//     console.log('item saved');
// });

var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];     

var urlencodedParser = bodyParser.urlencoded({extended: false});


module.exports = function(app) {
    
    
    
    // request templates
    app.get('/', function (req, res) {
        res.render('index');
    });
    
    app.get('/todo', function (req, res) {
        // get data from mongodb and pass it to view
        // specific which model
        Todo.find({}, function(err, data){
            if (err) throw err;
            res.render('todo', {todos: data});
        }); // find all
        
    });
    
    app.post('/todo', urlencodedParser, function (req, res) {
        // get data from view and add to mongodb
        var newTodo = Todo(req.body).save(function(err, data){
            if (err) throw err;
            res.json(data);
        });
    });
    
    app.delete('/todo/:item', function (req, res) {
        
        // delete the requested item from mongodb
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
            if (err) throw err;
            res.json(data);
            
            });
        
    });
    
};