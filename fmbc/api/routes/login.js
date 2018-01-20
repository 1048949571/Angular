var express = require('express');
var router = express.Router();
const query = require("../config")

/* GET users listing. */
//登录
router.post('/', function (req, res, next) {

  const data = req.body.user
  const uname = data.userName
  const pwd = data.pwd
  const sql = `select * from fmbc where uname='${uname}';`
  query(sql, (err, results, fields) => {
    if (err) throw Error(err)
    if (results.length > 0) {
      res.setHeader('Cookie','UID=938497349587348;SESSION=EOWRUOEIUKSDFJ8437593875kjdj')
      res.json({
        code: 0,
        message: '登录成功'
      })
    }else{
        res.json({
            code: 500,
            message: '登录失败'
          })
    }

  })
});



module.exports = router;
