import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { BillsService, Product } from './bills.service';
import * as PDFDocument from 'pdfkit';
import { Response } from 'express';

@Controller('bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @Get()
  findAll() {
    return this.billsService.findAll();
  }

  @Post()
  /*   create( @Body() body: { customer: string; products: Product[] } ) {
    const { customer, products } = body;
    return this.billsService.create(customer, products);
  } */
  async create(
    @Body() body: { customer: string; products: Product[] },
    @Res() res: Response,
  ) {
    const { customer, products } = body;
    const receipt = this.billsService.create(customer, products);

    const doc = new PDFDocument();

    doc.fontSize(18).text('Purchase Receipt', { align: 'center' });
    doc.moveDown();

    doc.fontSize(14).text(`Customer: ${receipt.customer}`);

    doc.moveDown();

    doc.text('Products:');
    receipt.products.forEach((p, i) => {
      doc.text(`${i + 1}. ${p.product} - $${p.price.toFixed(2)}`);
    });

    doc.moveDown();

    doc.text(`Total: $${receipt.total.toFixed(2)}`);

    doc.end();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="purchase_receipt.pdf"',
    });

    doc.pipe(res);
  }
}
