const { User, sequelize } = require("../models");

(async () => {
  await sequelize.sync();
  const jane = await User.create({
    username: "janedoe",
    birthday: new Date(1980, 6, 20),
  });
  console.log(jane.toJSON());
})();

test("test", () => {
  expect(true).toBe(true);
});
