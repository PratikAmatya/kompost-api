const moment = require("moment");

const bcrypt = require("bcrypt");

const salt = bcrypt.genSaltSync(8);

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        name: "Pratik Amatya",
        email: "pratikamatya@gmail.com",
        password: bcrypt.hashSync("12345678", salt),
        phone: "9818254567",
        active: true,
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        name: "Aashna Shrestha",
        email: "aashnashrestha@gmail.com",
        password: bcrypt.hashSync("12345678", salt),
        phone: "9818254568",
        active: true,
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        name: "Anwesh Pvt. Ltd.",
        email: "aashnashrestha@gmail.com",
        password: bcrypt.hashSync("12345678", salt),
        phone: "9818254569",
        active: true,
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
