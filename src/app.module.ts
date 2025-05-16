import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketController } from './ticket/ticket.controller';
import { TicketService } from './ticket/ticket.service';

@Module({
  imports: [],
  controllers: [AppController, TicketController],
  providers: [AppService, TicketService],
})
export class AppModule {}
