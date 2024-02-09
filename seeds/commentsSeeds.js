const { Comments } = require("../models");

const commentData = [
  {
    comment_text: "Thank you for the blog post!",
    date_created: "1/8/2024",
    user_id: "2",
    post_id: "3",
  },
  ];

const commentsSeeds = () => Comments.bulkCreate(commentData);

module.exports = commentsSeeds;