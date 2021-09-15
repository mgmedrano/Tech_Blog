const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class User extends Model {}

User.init(
  {
    // define id column
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    // define columns
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    user_password: {
        type: DataTypes.STRING,
        allowNull: false,
              //research how to validate pw length
        validate: {

        }
    },




  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;