const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const Promise = require("es6-promise").Promise;
const multer = require("multer");

exports.homePage = (req,res) => {
   res.render("index", {title:"File MetaData"});
}

exports.upload = multer().single("file");

exports.fileSize =(req,res) => {
  const result = {
    size:req.file.size,
    fileName: req.file.originalname
  }
  console.log(req.file.mimetype);
  res.json(result);
}
