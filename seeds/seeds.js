const { User, Books } = require('../models');
const sequelize = require('../config/connection');

const makeSeeds = async () => {
  const userdata = [
    {
      name: 'Lili',
      username: 'Liliko@gmail.com',
      password: '12345'
    },
    {
      name: 'Rachel',
      username: 'iaconiannir@gmail.com',
      password: '12345'
    },
    {
      name: 'Evan',
      username: "evanstein28@gmail.com",
      password: '12345'
    }
  ];

  await sequelize.sync({ force: true });

  const dbUsers = await User.bulkCreate(userdata, { individualHooks: true });
  console.log(dbUsers);
  const bookdata = [
    {
      title: 'Slaughterhouse Five',
      author: 'Kurt Vonnegut',
      description: 'Anti-war novel',
      UserId: dbUsers[0].id
    },
    {
      title: 'The Great Gatsby',
      author: 'Scott Fitzerald',
      description: 'The story of eccentric millionaire',
      UserId: dbUsers[0].id
    },
    {
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      description: 'Realist novel',
      UserId: dbUsers[1].id
    },
    {
      title: 'Harry Potter',
      author: 'Rowling, J.K.',
      description: 'Fiction',
      UserId: dbUsers[0].id
    }
  ];

  const dbBooks = await Books.bulkCreate(bookdata);
  console.log('all done');
  process.exit(0);
};

makeSeeds();
