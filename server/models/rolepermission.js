const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RolePermission extends Model {
    static associate(models) {
      RolePermission.belongsTo(models.Role, {
        as: "Roles",
        foreignKey: "roleId",
      });
      RolePermission.belongsTo(models.Permission, {
        as: "Permissions",
        foreignKey: "permissionId",
      });
    }
  }
  RolePermission.init(
    {
      roleId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      permissionId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "RolePermission",
    }
  );
  return RolePermission;
};
