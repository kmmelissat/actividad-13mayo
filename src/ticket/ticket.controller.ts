import { Body, Controller, Get, Post, Delete } from '@nestjs/common';
import { TicketService } from './ticket.service';

@Controller('ticket')
export class TicketController {

    constructor(private readonly ticketService: TicketService){}
        
        @Get()
        getAllTickets(){
            return this.ticketService.findAll();
        }

        @Post()
        createTickets(@Body() body: {name: string}){
            return this.ticketService.create(body.name);
        }
        
        @Delete("expirados")
        eliminarExpirados() {
        const eliminados = this.ticketService.delete();
        return { eliminados };
        }
}
