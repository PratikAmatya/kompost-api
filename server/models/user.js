const bcrypt = require("bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Role, {
        through: models.UserRole,
        as: "UserRoles",
        foreignKey: "userId",
        sourceKey: "id",
      });

      User.hasMany(models.Order, {
        as: "UserOrder",
        foreignKey: "userId",
        sourceKey: "id",
      });

      User.hasMany(models.Pickup, {
        as: "UserPickup",
        foreignKey: "phone",
        sourceKey: "phone",
      });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM,
        values: ["male", "female", "unspecified"],
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: (u) => {
          const salt = bcrypt.genSaltSync(8);
          u.password = bcrypt.hashSync(u.password, salt);
        },
      },
    }
  );
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  return User;
};
