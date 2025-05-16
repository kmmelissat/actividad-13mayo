import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class OrdersService {
  private orders = [
    { id: 1, status: 'pendiente' },
    { id: 2, status: 'pendiente' },
    { id: 3, status: 'preparando' },
    { id: 4, status: 'entregado' },
    { id: 5, status: 'pendiente' },
    { id: 6, status: 'entregado' },
    { id: 7, status: 'preparando' },
    { id: 8, status: 'pendiente' },
    { id: 9, status: 'entregado' },
    { id: 10, status: 'pendiente' },
  ];

  private estados = ['pendiente', 'preparando', 'entregado'];

    getOrder(id: number) {
    const order = this.orders.find((o) => o.id === id);
    if (!order) {
      throw new NotFoundException('Orden no encontrada');
    }
    return order;
  }

  updateStatus(id: number, newStatus: string) {
    const order = this.getOrder(id);
    const actual = this.estados.indexOf(order.status);
    const nuevo = this.estados.indexOf(newStatus);

    if (nuevo === -1 || nuevo !== actual + 1) {
      throw new BadRequestException('Cambio de estado inválido');
    }

    order.status = newStatus;
    return order;
  }
}