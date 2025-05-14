import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideogamesModule } from './videogames/videogames.module';

@Module({
  imports: [VideogamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
