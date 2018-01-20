var express = require('express');
var router = express.Router();
const query = require("../config")

/* GET users listing. */
//注册
 router.post('/', function (req, res, next) {

  const data = req.body.user;
    const userName = data.userName;
    const pwd = data.pwd;

    const sql = `select * from fmbc where uname='${userName}'`;

    query(sql, (err, results, fields) => {
        if( err ) throw Error(err);
        if(results.length >0 ){
            res.json({
                code: '500',
                message: '用户名已存在'
            })
        }else{
            const into = `INSERT INTO fmbc (uname, upassword) values ('${userName}', '${pwd}')`;
            query(into, (err, results, fields) => {
                if( err ) throw Error(err);
                res.json({
                    code: '200',
                    message: '注册成功',
                    data: results
                })
            })
        }
    })

 });

module.exports = router;

