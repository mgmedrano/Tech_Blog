const { Post } = require('../models');

const postData = [
  {
    title: 'This is title #1',
    content: 'This is content #1 wants to see',
    user_id: 1
  },
  
  {
    title: 'This is title #2',
    content: 'This is content #2 wants to see',
    user_id: 2
  },
  {
    title: 'This is title #3',
    content: 'This is content #3 wants to see',
    user_id: 3
  },
    
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;