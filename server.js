// init project
const express = require('express');
const app = express();
const controller = require("./controllers/controller");
const routes = require("./routes/index.js");
const path = require('path');
require('dotenv').config();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.use("/", routes);


// Error middleware
app.use((err, req, res, next) => {
  if (err) {
    res.status(err.status || 500).type('txt').send(err.message || 'SERVER ERROR');
  }
})
// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log('Node.js listening ...');
});