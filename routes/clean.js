var mysql  = require('mysql');
var express = require('express');
var router = express.Router();


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12345',
    database : 'clean'
});
router.get('/', function(req, res, next) {
    res.render('clean', { title: 'Express' });
});
var compar = new Array(10);


// router.post("/",function (req,res,next){
//     res.redirect("/clean");
// })
module.exports = router;