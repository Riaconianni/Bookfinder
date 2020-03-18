const Book = require("../models/books");

const bookdata = [{
    title: "Slaughterhouse Five",
    author: "Kurt Vonnegut",
    description: "Anti-war novel",
  },
  {
    title: "The Great Gatsby",
    author: "Scott Fitzerald",
    description: "The story of eccentric millionaire",
  },
  {
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    description: "Realist novel",
  },
  {
    title: "	Harry Potter",
    author: "Rowling, J.K.",
    description: "Fiction",
  }

]

Book.sync({
  force: true
}).then(() => {
  Book.bulkCreate(bookdata, {
      individualHooks: true
    })
    .then(res => {
      console.log('book created!');
      console.log(res);
      process.exit(0);
    })
    .catch(err => {
      throw new Error(err);
    });
});