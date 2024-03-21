// Importing necessary parts (Model, DataTypes) from the 'sequelize' library
const { Model, DataTypes } = require("sequelize");
// Importing the database connection from 'connection.js'
const sequelize = require("../config/connection");

// Creating a Post class that extends the sequelize Model class
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

// Exporting the Post model for use in other parts of the application
module.exports = Post;
