var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
//port connection
var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/app/css"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//routes
var apiRoutes = require('./app/routing/apiRoutes');
var htmlRoutes = require('./app/routing/htmlRoutes')

//listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});