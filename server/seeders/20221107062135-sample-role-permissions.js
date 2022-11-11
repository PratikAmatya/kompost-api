const moment = require("moment");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("RolePermissions", [
      {
        roleId: "administrator",
        permissionId: "permission.get",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        roleId: "administrator",
        permissionId: "permission.list",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },

      {
        roleId: "administrator",
        permissionId: "permission.update",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },

      {
        roleId: "administrator",
        permissionId: "permission.create",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        roleId: "administrator",
        permissionId: "permission.delete",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        roleId: "administrator",
        permissionId: "role.get",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        roleId: "administrator",
        permissionId: "role.list",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },

      {
        roleId: "administrator",
        permissionId: "role.update",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },

      {
        roleId: "administrator",
        permissionId: "role.create",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        roleId: "administrator",
        permissionId: "role.delete",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        roleId: "administrator",
        permissionId: "user.get",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        roleId: "administrator",
        permissionId: "user.list",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },

      {
        roleId: "administrator",
        permissionId: "user.update",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },

      {
        roleId: "administrator",
        permissionId: "user.create",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        roleId: "administrator",
        permissionId: "user.delete",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        roleId: "administrator",
        permissionId: "order.get",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        roleId: "administrator",
        permissionId: "order.list",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },

      {
        roleId: "administrator",
        permissionId: "order.update",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },

      {
        roleId: "administrator",
        permissionId: "order.create",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        roleId: "administrator",
        permissionId: "order.delete",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        roleId: "administrator",
        permissionId: "pickup.get",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        roleId: "administrator",
        permissionId: "pickup.list",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },

      {
        roleId: "administrator",
        permissionId: "pickup.update",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },

      {
        roleId: "administrator",
        permissionId: "pickup.create",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        roleId: "administrator",
        permissionId: "pickup.delete",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        roleId: "member",
        permissionId: "pickup.get",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        roleId: "member",
        permissionId: "pickup.list",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        roleId: "member",
        permissionId: "pickup.update",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },

      {
        roleId: "member",
        permissionId: "pickup.create",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        roleId: "member",
        permissionId: "pickup.delete",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        roleId: "member",
        permissionId: "order.get",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        roleId: "member",
        permissionId: "order.list",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },

      {
        roleId: "member",
        permissionId: "order.create",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
      {
        roleId: "member",
        permissionId: "order.delete",
        createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("RolePermissions", null, {});
  },
};
