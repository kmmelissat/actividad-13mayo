import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideogamesModule } from './videogames/videogames.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [VideogamesModule, EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
