import { Injectable } from '@nestjs/common';

export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  genre: string;
}

@Injectable()
export class BooksService {
  private books: Book[] = [
    // Literary Fiction
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925,
      genre: 'Literary Fiction',
    },
    {
      id: 2,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      year: 1951,
      genre: 'Literary Fiction',
    },
    // Classic Literature
    {
      id: 3,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960,
      genre: 'Classic Literature',
    },
    {
      id: 4,
      title: 'The Grapes of Wrath',
      author: 'John Steinbeck',
      year: 1939,
      genre: 'Classic Literature',
    },
    // Dystopian Fiction
    {
      id: 5,
      title: '1984',
      author: 'George Orwell',
      year: 1949,
      genre: 'Dystopian Fiction',
    },
    {
      id: 6,
      title: 'Brave New World',
      author: 'Aldous Huxley',
      year: 1932,
      genre: 'Dystopian Fiction',
    },
    {
      id: 7,
      title: 'The Hunger Games', //me gustaba mucho como para no ponerlo jejejejeje
      author: 'Suzanne Collins',
      year: 2008,
      genre: 'Dystopian Fiction',
    },
    // Romance
    {
      id: 8,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      year: 1813,
      genre: 'Romance',
    },
    {
      id: 9,
      title: 'Jane Eyre',
      author: 'Charlotte Brontë',
      year: 1847,
      genre: 'Romance',
    },
    // Fantasy
    {
      id: 10,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      year: 1937,
      genre: 'Fantasy',
    },
    {
      id: 11,
      title: 'The Lion, the Witch and the Wardrobe',
      author: 'C.S. Lewis',
      year: 1950,
      genre: 'Fantasy',
    },
  ];

  findAll(): Book[] {
    return this.books;
  }
}
