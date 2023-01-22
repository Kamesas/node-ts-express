"use strict";
var express = require("express");
var router = express.Router();
router.get("/", function (req, res) {
    res.send(["task one", "task two"]);
});
module.exports = router;
