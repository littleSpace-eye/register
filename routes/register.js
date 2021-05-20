var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12345',
    database : 'clean'
});




/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('register', { title: 'HTML' });
});
let arr = new Array(10000);
router.post('/', (req, res) => {


    arr[0] = req.body.name_1;
    arr[1] = req.body.pass_1;
    arr[2] = req.body.classRoom_1;
    arr[3] = req.body.ID_1;



    let sql = 'select * from stu where name=? and password=? and classRoom=? and ID=?'
    connection.query(sql,arr,function (err, result) {
        if (result.length > 0) {
            res.json({result:result});
            //res.redirect("/login")
        }else {
            let sql_2 = 'insert into stu (name,password,classRoom,ID) values(arr[0],arr[1],arr[2],arr[3])';
            connection.query(sql_2, function (err, result) {
                res.redirect("/login");
            })
        }
    })







})
module.exports = router;
