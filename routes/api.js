const express = require("express");
const router = express.Router();
const { User, sequelize } = require("../models");

router.get("/users", async (_req, res, _next) => {
  const data = await User.findAll();
  res.json({ data: data });
});

module.exports = router;
