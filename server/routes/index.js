var express = require("express"),
	app = express(),
	router = express.Router(),
	publicDir = require("path").join(__dirname, "../public");

// GET
router.get('/', function(req, res, next) {
	res.sendFile(publicDir);
});

module.exports = router;
