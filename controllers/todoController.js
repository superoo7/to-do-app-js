var bodyParser = require("body-parser");

var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];     

var urlencodedParser = bodyParser.urlencoded({extended: false});


module.exports = function(app) {
    
    
    
    // request templates
    app.get('/', function (req, res) {
        res.render('index');
    });
    
    app.get('/todo', urlencodedParser, function (req, res) {
        res.render('todo', {todos: data});
    });
    app.post('/todo', function (req, res) {
        data.push(req.body);
        res.json(data);
    });
    app.delete('/todo/:item', function (req, res) {
        data = data.filter(function(todo){
            // when false, delete it
            return todo.item.replace(/ /g, '-') !== req.params,item;
        });
        res.json(data);
    });
    
};