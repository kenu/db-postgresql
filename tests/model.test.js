const initModels = require('../models/init-models');
const { sequelize } = require('../config/db');
const models = initModels(sequelize);

test('test create', async () => {
  const data = await models.users.findAll();
  expect(data.length > 0).toBe(true);
});
