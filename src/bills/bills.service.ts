import { Injectable } from '@nestjs/common';

export interface Product {
    product: string;
    price: number;
}

export interface Bill {
    id: number;
    customer: string;
    products: Product[];
}

@Injectable()
export class BillsService {
    private bills: Bill[] = [
        {
            id: 1,
            customer: 'Christian Sánchez',
            products: [
                {
                    product: 'Milk',
                    price: 4.5,
                },
                {
                    product: 'Bread',
                    price: 2.5,
                },
                {
                    product: 'Eggs',
                    price: 3.0,
                }
            ]
        }
    ];

  findAll(): Bill[] {
    return this.bills
  }

  findOne(id: number): Bill | undefined {
    return this.bills.find(bill => bill.id === id)
  }

    calculateTotal(billId: number) {
    const bill = this.findOne(billId)
    if (!bill) return
    return bill.products.reduce((total, product) => total + product.price, 0)
  }

  create(customer: string, products: Product[]): Bill & { total: number } {
    const newBill: Bill = {
    id: Date.now(),
    customer,
    products,
  };
  this.bills.push(newBill)

  const total = this.calculateTotal(newBill.id)!

  return {
    ...newBill,
    total,
  };
}

 }