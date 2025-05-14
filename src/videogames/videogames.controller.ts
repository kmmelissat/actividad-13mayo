import { Controller } from '@nestjs/common';
import { VideogamesService } from './videogames.service';

@Controller('videogames')
export class VideogamesController {
  constructor(private readonly videogamesService: VideogamesService) {}
}
