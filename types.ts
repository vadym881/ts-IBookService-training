import { Author } from "./models/author";
import { Book } from "./models/book";

export type GenreType =
  | "Fiction"
  | "Non-Fiction"
  | "Science Fiction"
  | "Fantasy"
  | "Mystery"
  | "Adventure"
  | "Romance"
  | "Horror";

export interface BookSearchParams {
  title?: string;
  genre?: GenreType;
  yearPublished?: number;
  author?: Author;
}

export interface IBookService {
  getBooks(): Book[];
  getBookById(id: number): Book;
  getAuthors(): Author[];
  getAuthorById(id: number): Author;
  getBooksByAuthor(author: Author): Book[];
  getAuthorByBookId(bookId: number): Author;
  search(params: BookSearchParams): Book[];
}
