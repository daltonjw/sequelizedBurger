var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get route redirect to index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  //calling burger.selectAll
  burger.selectAll(function(burgerData) {
    //Callback will return burger_data and render to index with handlebars
    res.render("index", { burger_data: burgerData });
  });
});

//Post route 
router.post("/burgers/insertone", function(req, res) {
  // takes the request object using it as input for burger.insertOne
  burger.insertOne(req.body.burger_name, function(result) {
    // Callback will return a log to console and redir back to /
    console.log(result);
    res.redirect("/");
  });
});

router.put("/burgers/updateone", function(req, res) {
  burger.updateOne(req.body.burger_id, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

module.exports = router;
