var express = require("express");
var router = express.Router();

router.get("/", function (req: any, res: any) {
  res.send(["task one", "task two"]);
});

module.exports = router;
