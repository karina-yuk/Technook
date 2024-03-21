// Importing necessary parts (Model, DataTypes) from the 'sequelize' library
const { Model, DataTypes } = require('sequelize');
// Importing the database connection from 'connection.js'
const sequelize = require('../config/connection');

// Creating a Comment class that extends the sequelize Model class
class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true, 
    },
    comment_text: {
      type: DataTypes.TEXT,
      allowNull: false, 
    },
    user_id: {
      type: DataTypes.INTEGER, 
      references: {
        model: 'user', 
        key: 'id', 
      },
    },
    post_id: {
      type: DataTypes.INTEGER, 
      references: {
        model: 'post', 
        key: 'id',
      },
    },
  },
  {
    sequelize, 
    timestamps: true, 
    freezeTableName: true, 
    underscored: true,
    modelName: 'comment', 
  }
);

// Exporting the Comment model for use in other parts of the application
module.exports = Comment;