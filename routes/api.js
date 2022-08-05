const express = require("express");
const router = express.Router();
const initModels = require("../models/init-models");
const { sequelize } = require("../config/db");
const models = initModels(sequelize);

router.get("/users", async (req, res, _next) => {
  const offset = req.query.offset || 0;
  let limit = Number(req.query.size) || 5;
  if (limit > 100) {
    limit = 100;
  }
  const where = {
    offset,
    limit,
    order: [["pk", "DESC"]],
  };
  const { count, rows: users } = await models.users.findAndCountAll(where);

  const totalPages = Math.floor((count - 1) / limit) + 1;
  const number = Math.min(
    Math.floor(offset / limit),
    Math.floor(count / limit)
  );

  const page = {
    size: limit,
    totalElements: count,
    totalPages,
    number: number,
  };
  res.json({
    _embedded: {
      users,
    },
    page,
  });
});

module.exports = router;
