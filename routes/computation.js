var express = require("express");
var router = express.Router();
var num1;
var atan2;
var atanh;
var cbrt;

/* GET users listing. */

router.get("/", function (req, res, next) {
  num1 = Math.random() * (100 - 1) + 1;
  atan2 = Math.atan2(num1);
  atanh = Math.atanh(num1);
  cbrt = Math.cbrt(num1) ;
  res.send(`atan2 of ${num1} is: ${atan2} <br>
    atanh of ${num1} is: ${atanh} <br>
         cbrt of ${num1} is: ${cbrt}`);
});

module.exports = router;