var express = require('express');
var router = express.Router();
var appdata = require("../data.json");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/speaker', function(req, res, next) {
    var myArtWork = [];
    var myArtists = [];
    myArtists = appdata.speakers;
    appdata.speakers.forEach(function(item){
     myArtWork = myArtWork.concat(item.artwork);       
    });
  res.render('speakers', {
      title: 'Speaker',
      artwork : myArtWork,
      artists: myArtists,
       page: 'artistList'
    });
});

/* GET speakers page. */
router.get('/speaker/:speakerid', function(req, res, next) {
    var myArtWork = [];
    var myArtists = [];
    appdata.speakers.forEach(function(item){
        if(item.shortname==req.params.speakerid){
         console.log("Hi from "+req.params.speakerid);
        myArtists.push(item);    
        myArtWork = myArtWork.concat(item.artwork);
        }
    });
  res.render('speakers', {
      title: 'Speaker',
      artwork : myArtWork,
      artists: myArtists,
      page: 'artistDetail'
    });
});












module.exports = router;
