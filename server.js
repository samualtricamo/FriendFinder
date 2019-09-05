var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
//port connection
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


//routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


//listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});