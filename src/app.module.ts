import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideogamesModule } from './videogames/videogames.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [VideogamesModule, BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
