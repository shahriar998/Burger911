var express = require('express');

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    res.redirect("/");
});

router.get("/burgers", function (req, res) {
   burger.selectAll(function(data){
    var allData = {
        burger:data
    }
    console.log(allData)
   })
    
});
router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      "burger_name", 
    ], [
      req.body.name, 
    ], function(result) {
      res.redirect("/burgers");
    });
  });

router.put("/:id", function (req, res) {
    var id = req.params.id;

    console.log("id", id);

    burger.updateOne(id, function () {
        res.redirect("/");
    });
});

module.exports = router;
  
//   router.put("/api/cats/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
  
//     console.log("condition", condition);
  
//     cat.update({
//       sleepy: req.body.sleepy
//     }, condition, function(result) {
//       if (result.changedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });
  
//   router.delete("/api/cats/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
  
//     cat.delete(condition, function(result) {
//       if (result.affectedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });
  
  // Export routes for server.js to use.
  module.exports = router;