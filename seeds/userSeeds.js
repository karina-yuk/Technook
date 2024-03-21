// Import the User model from the specified path
const { User } = require('../models');

// Define an array of user data, each object representing a user with a username, email, and password
const userData = [
  {
    username: 'john_doe',
    email: 'john.doe@example.com',
    password: '123456789',
  },
  {
    username: 'carlito_p',
    email: 'carlito.p@example.com',
    password: '987456321',
  },
  {
    username: 'pedro-lima',
    email: 'pedro.lima@example.com',
    password: '147852369',
  },
  {
    username: 'gata-garota',
    email: 'gata.garota@example.com',
    password: '369852147',
  },
];

// Define a function called seedUsers, which uses the bulkCreate method of the User model to insert multiple users into the database
// The { individualHooks: true } option is provided to trigger any individual hooks associated with the model during the creation process
const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

// Export the seedUsers function to be used in the database seed script: 'seed.js'
module.exports = seedUsers;