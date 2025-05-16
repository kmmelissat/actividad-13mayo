import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideogamesModule } from './videogames/videogames.module';
import { EventModule } from './event/event.module';
import { BillsModule } from './bills/bills.module';
import { BooksModule } from './books/books.module';
import { TicketsModule } from './ticket/ticket.module';

@Module({
  imports: [VideogamesModule, EventModule, BillsModule, BooksModule, TicketsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
      }),
    },
  ],
})
export class AppModule {}
