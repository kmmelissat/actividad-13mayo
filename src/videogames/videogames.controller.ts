import { Controller, Get, Post, Body } from '@nestjs/common';
import { VideogamesService } from './videogames.service';
import { CreateVideogameDto } from './dto/create-videogame.dto';

@Controller('videogames')
export class VideogamesController {
  constructor(private readonly videogamesService: VideogamesService) {}

  @Get()
  getAllVideogames() {
    return this.videogamesService.findAll();
  }

  @Post()
  createVideogame(@Body() createVideogameDto: CreateVideogameDto) {
    return this.videogamesService.create(createVideogameDto);
  }
}