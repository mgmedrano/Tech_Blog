const { User } = require('../models');

const userData = [
  {
    user_name: 'Mike',
    user_password: 'm12345'
  },
  {
    user_name: 'Art',
    user_password: 'a12345'
  },
  {
    user_name: 'Teresa',
    user_password: 't12345'
  },
     
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;