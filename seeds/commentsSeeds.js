const { Comment } = require('../models');

const commentData = []

const commentsSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentsSeeds;