const sequelize = require('../config/connection.js');

const postsSeeds = require('./postsSeeds.js');
const commentsSeeds = require('./commentsSeeds.js');
const usersSeeds = require('./usersSeeds.js');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await usersSeeds();
    console.log('\n----- USERS SEEDED -----\n');
    await postsSeeds();
    console.log('\n----- POSTS SEEDED -----\n');
    await commentsSeeds();
    console.log('\n----- COMMENTS SEEDED -----\n');

    process.exit(0);
};

seedAll();