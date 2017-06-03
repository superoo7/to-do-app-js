module.exports = function(app) {
    // request templates
    app.get('/', function (req, res) {
        res.render('index');
    });
};