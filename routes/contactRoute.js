const express = require('express');
const router = express.Router();
const contactController = require("../controllers/contactController");


router.get("/",contactController);

module.exports = router;