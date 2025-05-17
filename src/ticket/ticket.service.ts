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

    delete(){

        const TotalQuantity = this.tickets.length;
        const CurrentTime = new Date().getTime();
        const LimitTime = 2*60*1000;

        this.tickets = this.tickets.filter(t => {

            if (!t.tiempoDeCompra) return true;

            const tiempoCompra = new Date(t.tiempoDeCompra).getTime();
            const tiempoTranscurrido = CurrentTime - tiempoCompra;
            return tiempoTranscurrido <= LimitTime;
        })

        const ticketsEliminados = TotalQuantity - this.tickets.length;
        console.log(`Se eliminaron ${ticketsEliminados} tickets expirados`);
    
        return ticketsEliminados;
    }
}
