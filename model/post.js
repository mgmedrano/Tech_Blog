const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Post extends Model {}

Post.init(
  {
    // define id column
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    // define columns
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.TEXT,
        references: {
            model: 'user',
            key: 'id'
        }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;