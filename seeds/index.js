// Import the seed functions for users, posts, and comments from their respective files
const seedUsers = require('./userSeeds');
const seedPosts = require('./postSeeds');
const seedComments = require('./commentSeeds');

// Import the Sequelize connection instance from the specified path
const sequelize = require('../config/connection');

// Define a function called seedAll, which is an asynchronous function that seeds the database with users, posts, and comments
const seedAll = async () => {
  // Synchronize the Sequelize models with the database and force the creation of tables by setting { force: true }
  await sequelize.sync({ force: true });
  console.log('\n\x1b[32m----- DATABASE SYNCED -----\x1b[0m\n');

  // Seed the database with users using the seedUsers function and log a message indicating completion
  await seedUsers();
  console.log('\n\x1b[32m----- USERS SEEDED -----\x1b[0m\n');

  // Seed the database with posts using the seedPosts function and log a message indicating completion
  await seedPosts();
  console.log('\n\x1b[32m----- POSTS SEEDED -----\x1b[0m\n');

  // Seed the database with comments using the seedComments function and log a message indicating completion
  await seedComments();
  console.log('\n\x1b[32m----- COMMENTS SEEDED -----\x1b[0m\n');

  // Exit the process with a code of 0 (indicating successful execution)
  process.exit(0);
};

// Call the seedAll function to initiate the database seeding process
seedAll();