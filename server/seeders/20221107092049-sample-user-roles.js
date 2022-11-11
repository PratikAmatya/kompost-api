const moment = require("moment");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("UserRoles", [
      {
        userId: 1,
        roleId: "administrator",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        userId: 2,
        roleId: "member",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserRoles", null, {});
  },
};
