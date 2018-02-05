const express = require('express');
const fs = require('fs');
const controller = require('../controllers/controller');
const router = express.Router();

router.get("/", controller.homePage);
router.post("/", controller.homePage);
module.exports = router;