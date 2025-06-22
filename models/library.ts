import { GenreType, IBookService } from "../types";
import { Author } from "./author";
import { Book } from "./book";

export class Library implements IBookService {
  private books: Book[] = [];
  private authors: Author[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  addAuthor(author: Author): void {
    this.authors.push(author);
  }

  getBooks(): Book[] {
    return this.books;
  }

  getBookById(id: number): Book {
    const book = this.books.find((book) => book.id === id);
    if (!book) {
      throw new Error(`Book with id ${id} not found`);
    }
    return book;
  }

  getAuthorById(id: number): Author {
    const author = this.authors.find((author) => author.id === id);
    if (!author) {
      throw new Error(`Author with id ${id} not found`);
    }
    return author;
  }

  getAuthors(): Author[] {
    return this.authors;
  }

  getBooksByAuthor(author: Author): Book[] {
    return this.books.filter((book) => book.author.id === author.id);
  }

  getAuthorByBookId(bookId: number): Author {
    const book = this.books.find((b) => b.id === bookId);
    if (!book) {
      throw new Error(`Book with id ${bookId} not found`);
    }
    return book.author;
  }

  search(params: {
    title?: string;
    genre?: GenreType;
    yearPublished?: number;
    author?: Author;
  }): Book[] {
    return this.books.filter((book) => {
      const matchesTitle = params.title
        ? book.title.toLowerCase().includes(params.title.toLowerCase())
        : true;
      const matchesGenre = params.genre ? book.genre === params.genre : true;
      const matchesYear = params.yearPublished
        ? book.yearPublished === params.yearPublished
        : true;
      const matchesAuthor = params.author
        ? book.author.id === params.author.id
        : true;

      return matchesTitle && matchesGenre && matchesYear && matchesAuthor;
    });
  }
}
