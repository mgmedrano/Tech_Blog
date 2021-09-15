const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'This is the text #1 wants to see',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'This is the text #2 wants to see',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'This is the text #3 wants to see',
    user_id: 3,
    post_id: 3
  },
    
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;