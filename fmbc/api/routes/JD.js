var express = require('express');
var router = express.Router();
var query = require("../config")

/* GET users listing. */
//
 router.get('/', function (req, res, next) {
    const nav = require("../data/JDdata.json")
    res.json(nav)
 });

module.exports = router;
