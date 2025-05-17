import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideogamesModule } from './videogames/videogames.module';
import { EventModule } from './event/event.module';
import { BillsModule } from './bills/bills.module';
import { BooksModule } from './books/books.module';
import { TicketsModule } from './ticket/ticket.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    VideogamesModule,
    EventModule,
    BillsModule,
    BooksModule,
    TicketsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
