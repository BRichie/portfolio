const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("BxR Portfolio");
});

module.exports = router;