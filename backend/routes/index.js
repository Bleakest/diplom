const express = require("express");

const router = express.Router({ mergeParams: true });

router.use("/", require("./auth"));
router.use("/", require("./product"));
router.use("/", require("./panel"));
router.use("/", require("./basket"));

module.exports = router;
