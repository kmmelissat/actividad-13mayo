import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { OrdersModule } from './orders/orders.module';
import { ValidationPipe } from '@nestjs/common';

const PORT = 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT);
  console.log('🚨🚨🚨🚨');
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
  console.log('🚨🚨🚨🚨');
}
bootstrap();
