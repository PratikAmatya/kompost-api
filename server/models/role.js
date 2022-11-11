const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.belongsToMany(models.User, {
        through: models.UserRole,
        as: "UserRoles",
        foreignKey: "roleId",
        sourceKey: "id",
      });
      Role.belongsToMany(models.Permission, {
        through: models.RolePermission,
        as: "RolePermissions",
        foreignKey: "roleId",
        sourceKey: "id",
      });
    }
  }
  Role.init(
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Role",
    }
  );
  return Role;
};
