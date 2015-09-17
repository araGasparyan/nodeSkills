/* global __dir, __dirname */

var express = require('express');
var app=express();

app.set("view engine", "ejs");
//variable __dirname is the folder where appexp is
app.set("views", __dirname+"/views");
var routes = require('./routes');

//this var is visible for every partial
app.locals.pageTittle = "Something for all";


app.get("/", routes.index);
app.get("/about", routes.about);



//we can write even REGEXP as a route, should be in the end
app.get("*", function(req, res){
    res.send("Bad route");
});

var server=app.listen(3000, function(){
    console.log("I am listening");
});