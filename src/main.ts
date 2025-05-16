import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { OrdersModule } from './orders/orders.module';

async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
