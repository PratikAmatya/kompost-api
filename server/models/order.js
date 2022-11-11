const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, {
        as: "OrderUser",
        foreignKey: "userId",
      });
    }
  }
  Order.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deliveryDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      deliveryAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      paymentMethod: {
        type: DataTypes.ENUM,
        values: ["COD", "online"],
        allowNull: false,
      },
      paidStatus: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      paymentAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["pending", "cancelled", "delivered"],
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
