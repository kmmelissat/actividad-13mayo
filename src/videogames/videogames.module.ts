import { Module } from '@nestjs/common';
import { VideogamesService } from './videogames.service';
import { VideogamesController } from './videogames.controller';

@Module({
  controllers: [VideogamesController],
  providers: [VideogamesService],
})
export class VideogamesModule {}
