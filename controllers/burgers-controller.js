const express = require("express");
const router = express.Router();
const burgers = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", async (req, res) => {
  const data = await burgers.all();
  res.render("index", { burgers: data });
});

router.post("/api/burgers", async (req, res) => {
  const data = await burgers.create(
    ["burger", "devoured"],
    [req.body.burger, req.body.devoured]
  );
  res.json({ id: data.insertId });
});

router.put("/api/burgers/:id", async (req, res) => {
  let condition = `id = ${req.params.id}`;
  console.log("condition", condition);
  const data = await burgers.update({ devoured: req.body.devoured }, condition);
  if (data.changedRows === 0) {
    res.status(404).send();
  }
  res.status(200).end();
});
router.delete("/api/burgers/:id", async (req, res) => {
  let condition = `id = ${req.params.id}`;
  const data = await burgers.delete(condition);
  if (data.affectedRows === 0) {
    res.status(404).end();
  }
  res.status(200).send();
});

module.exports = router;
