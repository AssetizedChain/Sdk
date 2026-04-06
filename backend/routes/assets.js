const express = require("express");
const router = express.Router();

let assets = [];

// Create Asset
router.post("/", (req, res) => {
  const { name, value } = req.body;

  const asset = {
    id: assets.length + 1,
    name,
    value
  };

  assets.push(asset);

  res.json(asset);
});

// Get All Assets
router.get("/", (req, res) => {
  res.json(assets);
});

module.exports = router;
