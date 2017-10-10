var express = require('express');
var router = express.Router();

const index_controller = require('../controller/index_controller')
/* GET home page. */
router.get('/',index_controller.index);

module.exports = router;
