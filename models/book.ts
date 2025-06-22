import { GenreType } from "../types";
import { Author } from "./author";

export class Book {
  static nextId = 1;
  title: string;
  author: Author;
  id: number;
  genre: GenreType;
  yearPublished: number;
  summary?: string;
  pages?: number;
  rating?: number;
  isAvailable: boolean = true;

  constructor(
    title: string,
    author: Author,
    genre: GenreType,
    yearPublished: number,
    pages?: number
  ) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.yearPublished = yearPublished;
    this.id = Book.nextId++;
    this.pages = pages;
  }

  getShortDescription(): string {
    return `${this.title} (${this.yearPublished}), author: ${this.author.firstName} ${this.author.lastName}, genre: ${this.genre}`;
  }

  getBookAge(currentYear: number = new Date().getFullYear()): number {
    return currentYear - this.yearPublished;
  }
}
