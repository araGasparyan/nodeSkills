exports.index=function(req, res){
    res.render("default", {
       title: "Home",
       className: "home",
       users: ['Ara', 'Ando', 'Gexam']
    });
    // res.send("<h1>Hello</h1> express");
};

exports.about=function(req, res){
     res.render("default", {
       title: "About us",
       className: "about"
    });
    //res.send("It is MEEEEE");
};







/*
//we can have url localhost:3000/who/Valod
app.get("/who/:name?", function(req, res){
    var name=req.params.name;
    res.send("It is "+name);
});


//we can have url localhost:3000/who/Valod/miban
app.get("/who/:name?/:title?", function(req, res){
    var name=req.params.name;
    var title=req.params.title;
    res.send("It is "+name+". Its title is "+title);
});
*/
