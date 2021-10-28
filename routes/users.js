var val = 0;
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  val++;
  res.send('User accesses are: ' + val);
});

module.exports = router;
