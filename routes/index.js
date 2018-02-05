const express = require('express');
const fs = require('fs');
const controller = require('../controllers/controller');
const router = express.Router();
const multer = require("multer");

router.get("/", controller.homePage);
router.post("/",
      controller.upload,
      controller.fileSize
    );
module.exports = router;