const express = require("express");
const router = express.Router();
const File = require("../models/file");

router.get("/", (req, res) => {
  res.render("files");
});

router.post("/", (req, res) => {
  const file = new File(req.body);
  file
    .save()
    .then((file) => {
      res.status(201).send(file);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

module.exports = router;
