const { Post } = require("../models");

const postData = [
  {
    title: "What is a one-to-many relationship?",
    content:
      "A one-to-many relationship is when one row in a table can be linked to multiple rows in another table. For example, a single user can have many posts, but each post can only have one user.",
    date_created: "1/8/2024",
    user_id: "1",
  },
  {
    title: "What is a many-to-many relationship?",
    content:
      "A many-to-many relationship is when multiple rows in a table can be linked to multiple rows in another table. For example, a user can have many friends, and a friend can have many friends.",
    date_created: "1/8/2024",
    user_id: "1",
  },
  {
    title: "What is a primary key?",
    content:
      "A primary key is a unique identifier for a row in a table. It is used to identify a row in a table, and it is used to ensure that every row has a unique value.",
    date_created: "1/8/2024",
    user_id: "1",
  }
];

const postsSeeds = () => Post.bulkCreate(postData);

module.exports = postsSeeds;
