const { User, sequelize } = require("../models");

test(
  "test create",
  async () => {
    await sequelize.sync();
    const jane = await User.create({
      username: "janedoe",
      birthday: new Date(1980, 6, 20),
    });

    expect(jane.username).toBe("janedoe");
  }
);

test("test findAll", async () => {
  await sequelize.sync();
  const users = await User.findAll();
  expect(users.length > 0).toBe(true);
});
