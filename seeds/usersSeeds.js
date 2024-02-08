const { User } = require('../models');

const usersData = []

const userssSeeds = () => User.bulkCreate(usersData);

module.exports = userssSeeds;