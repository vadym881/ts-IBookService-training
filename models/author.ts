export class Author {
  static nextId = 1;
  firstName: string;
  lastName: string;
  id: number;
  bio?: string;
  birthDate?: Date;

  constructor(
    firstName: string,
    lastName: string,
    bio?: string,
    birthDate?: Date
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = Author.nextId++;
    this.bio = bio;
    this.birthDate = birthDate;
  }

  getInitials(): string {
    return `${this.firstName[0]}.${this.lastName[0]}.`;
  }
}
