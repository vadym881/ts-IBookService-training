import { Author } from "./models/author";
import { Book } from "./models/book";
import { Library } from "./models/library";
import { GenreType } from "./types";

const paolini = new Author("Christopher", "Paolini");
const werber = new Author("Bernard", "Werber");
const verne = new Author("Jules", "Verne");

const eragon = new Book("Eragon", paolini, "Fantasy", 2002, 544);
const fathers = new Book(
  "Father of our fathers",
  werber,
  "Science Fiction",
  1998,
  400
);
const childrenOfGrant = new Book(
  "The Children of Captain Grant",
  verne,
  "Adventure",
  1868,
  560
);
const mysteriousIsland = new Book(
  "The Mysterious Island",
  verne,
  "Adventure",
  1874,
  650
);

const library = new Library();
library.addAuthor(paolini);
library.addAuthor(werber);
library.addAuthor(verne);

library.addBook(eragon);
library.addBook(fathers);
library.addBook(childrenOfGrant);
library.addBook(mysteriousIsland);

console.log("All books:");
library.getBooks().forEach((book) => {
  console.log(book.getShortDescription());
});

console.log("\nBooks by Jules Verne:");
library.getBooksByAuthor(verne).forEach((book) => {
  console.log(book.getShortDescription());
});

console.log("\nSearch for books in genre 'Adventure':");
library.search({ genre: "Adventure" }).forEach((book) => {
  console.log(book.getShortDescription());
});
