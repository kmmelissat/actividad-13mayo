import { Controller, Get, Query } from '@nestjs/common';
import { BooksService, Book } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(@Query('q') q: string): Book[] {
    return this.booksService.findAll(q);
  }
}
