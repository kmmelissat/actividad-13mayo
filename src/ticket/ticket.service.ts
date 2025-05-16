import { Injectable } from '@nestjs/common';

@Injectable()
export class TicketService {

    private tickets = [
        {id:1, name:"Julio", tiempoDeCompra: new Date()},
        {id:2, name: "Cash", tiempoDeCompra: new Date()},
        {id:3, name:"Deigo", tiempoDeCompra: new Date()},
    ]

    findAll(){
        return this.tickets;
    }

    create(name: string){

        const newTicket = {
            id: Date.now(),
            name,
            tiempoDeCompra: new Date()
        }

        this.tickets.push(newTicket)
        return newTicket;
    }

}
