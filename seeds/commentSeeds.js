// Import the Comment model from the specified path
const { Comment } = require('../models');

// Define an array of comment data, each object representing a comment with associated text, user ID, and post ID
const commentData = [
  {
    comment_text: 'Great post! We can already see the potential of this tool.',
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: 'Love this tutorial. Thanks for sharing!',
    user_id: 3,
    post_id: 2,
  },
  {
    comment_text: 'Excellent tips! I will definitely be using this in my future projects.',
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: 'Quantum computing is a very interesting topic. I will definitely be learning more about it.',
    user_id: 4,
    post_id: 4,
  },
  {
    comment_text: 'This is a great tutorial for learning CSS Grid Layout. I will definitely be using it in my future projects.',
    user_id: 2,
    post_id: 5,
  }
];

// Define a function called seedComments, which uses the bulkCreate method of the Comment model to insert multiple comments into the database
const seedComments = () => Comment.bulkCreate(commentData);

// Export the seedComments function to be used in the database seed script: 'seed.js'
module.exports = seedComments;