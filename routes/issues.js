const express = require("express");
const router = express.Router();
const data = require("../data.json");

//GET single issue
router.get("/:id", function (req, res, next) {
  let issue = data.find((i) => i.id === req.params.id);
  if (issue) {
    res.send(issue);
  } else {
    res.send({ errorCode: "1", msg: "Issue Not found" });
  }
});

//POST create issue
router.post("/", function (req, res, next) {
  console.log(req.body);
  res.send({ id: req.body.id, msg: "successfully created" });
});

//PUT update issue
router.put("/:id", function (req, res, next) {
  console.log(req.params.id, req.body);
  res.send({ id: req.params.id, msg: "successfully updated" });
});

//DELETE issue
router.delete("/:id", function (req, res, next) {
  console.log(req.params.id);
  res.send({ id: req.params.id, msg: "successfully deleted" });
});

module.exports = router;
