DROP DATABASE IF EXISTS book_list;

CREATE DATABASE book_list;

USE book_list;


CREATE TABLE book_list(
  id INTEGER(20) AUTO_INCREMENT NOT NULL,
  title VARCHAR(100),
  read BOOLEAN DEFAULT false NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE authors(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(100),
  lastName VARCHAR(100),
  PRIMARY KEY (id)
);


INSERT INTO book_list
(book_name)
VALUES
("Slaughterhouse Five"),
("Anna Karenina"),
("War and Peace"),
("The Great Gatsby")


INSERT INTO authors(
  INSERT INTO authors 
  (firstName, lastName) 
  values
   ("Kurt", "Vonnegut"),
   ("Leo","Tolstoy"),
   ("Leo","Tolstoy"),
   ("Scott","Fitzgerald")
)
SELECT * FROM book_list;
SELECT * FROM authors;
