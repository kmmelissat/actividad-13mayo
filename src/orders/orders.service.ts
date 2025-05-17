import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class OrdersService {
  private orders = [
    { id: 1, title: 'Hamburguesa Clásica', status: 'pendiente' },
    { id: 2, title: 'Pizza Margherita', status: 'pendiente' },
    { id: 3, title: 'Ensalada César', status: 'preparando' },
    { id: 4, title: 'Pasta Alfredo', status: 'entregado' },
    { id: 5, title: 'Sushi Roll', status: 'pendiente' },
    { id: 6, title: 'Tacos al Pastor', status: 'entregado' },
    { id: 7, title: 'Pad Thai', status: 'preparando' },
    { id: 8, title: 'Burrito Bowl', status: 'pendiente' },
    { id: 9, title: 'Ramen', status: 'entregado' },
    { id: 10, title: 'Sandwich Club', status: 'pendiente' },
  ];

  private estados = ['pendiente', 'preparando', 'entregado'];

  getAllOrders() {
    return this.orders;
  }

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
