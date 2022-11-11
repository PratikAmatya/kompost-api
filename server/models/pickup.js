const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pickup extends Model {
    static associate(models) {
      Pickup.belongsTo(models.User, {
        as: "PickupUser",
        foreignKey: "userId",
      });
    }
  }
  Pickup.init(
    {
      pickupDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      pickupTime: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["pending", "cancelled", "picked"],
      },
    },
    {
      sequelize,
      modelName: "Pickup",
    }
  );
  return Pickup;
};
