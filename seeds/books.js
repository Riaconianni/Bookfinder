const Book = require("../models/book");

const bookdata = [{
    title: "Slaughterhouse Five",
    author: "Kurt Vonnegut",
    description: "Anti-war novel",
    bookId: 1
  },
  {
    title: "The Great Gatsby",
    author: "Scott Fitzerald",
    description: "The story of eccentric millionaire",
    bookId: 2
  },
  {
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    description: "Realist novel",
    bookId: 3

  },
  {
    title: "	Harry Potter",
    author: "Rowling, J.K.",
    description: "Fiction",
    bookId: 4
  }

]

Book.sync({
  force: true
}).then(() => {
  Book.bulkCreate(bookdata, {
      individualHooks: true
    })
    .then(res => {
      console.log('books created!');
      console.log(res);
      process.exit(1);
    })
    .catch(err => {
      throw new Error(err);
    });
});