const { Post } = require('../models');

const postData = []

const postsSeeds = () => Post.bulkCreate(postData);

module.exports = postsSeeds;