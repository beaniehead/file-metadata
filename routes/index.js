const express = require('express');
const fs = require('fs');
const controller = require('../controllers/controller');
const router = express.Router();

router.get("/", controller.homePage);

module.exports = router;