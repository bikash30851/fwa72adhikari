var express = require("express");
var router = express.Router();
var num1;
var cbrt;

/* GET users listing. */

router.get("/", function (req, res, next) {
  num1 = Math.random() * (100 - 1) + 1;
  
  cbrt = Math.cbrt(num1) ;
  res.send(`cbrt of ${num1} is: ${cbrt}`);
});

module.exports = router;