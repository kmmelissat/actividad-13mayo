import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillsController } from './bills/bills.controller';
import { BillsService } from './bills/bills.service';
import { VideogamesModule } from './videogames/videogames.module';
import { BooksModule } from './books/books.module';
import { EventModule } from './event/event.module';


@Module({
  imports: [VideogamesModule, EventModule, BooksModule],
  controllers: [AppController, BillsController],
  providers: [
    AppService,
    BillsService,
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
