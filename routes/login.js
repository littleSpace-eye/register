var express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12345',
    database : 'clean'
});
var router = express.Router();


/* GET home page. */
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Express' });
});

var compar = new Array(10);

router.post('/login',(req, res) => {

        compar[0] = req.body.name;
        compar[1] = req.body.pass;
        compar[2] = req.body.classRoom;
        compar[3] = req.body.ID;


//查
       // var  sql = 'SELECT * FROM stu where name = ? and id = ?';
        let sql = 'select * from stu where name=? and password=? and classRoom=? and ID=?'
       
        connection.query(sql,compar,function (err, result) {
            if(result.length > 0) {
                // res.json({
                //     status: 0,
                //     msg: "数据库中有数据 登陆成功",
                //     result: result
                // })
                res.redirect("/clean");
            }
            else {
                res.redirect("/login");
                //alert("please click the register");
                // res.json({
                //     status: 0,
                //     msg: "数据库中无数据 无法登陆",
                //     result: result
                // })


            }
        });

})
module.exports = router;
