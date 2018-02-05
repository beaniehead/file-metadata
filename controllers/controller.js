const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const Promise = require("es6-promise").Promise;

exports.homePage = (req,res) => {
res.render("index");
}