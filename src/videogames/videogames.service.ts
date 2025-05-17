import { Injectable } from '@nestjs/common';
import { CreateVideogameDto } from './dto/create-videogame.dto';

@Injectable()
export class VideogamesService {
  private videogames = [
    {
      id: 1,
      name: 'Minecraft',
      genre: 'Sandbox',
      date: '2011-11-18',
    },
    {
      id: 2,
      name: 'Grand Theft Auto V',
      genre: 'Open World',
      date: '2013-09-17',
    },
    {
      id: 3,
      name: 'Fortnite',
      genre: 'Battle Royale',
      date: '2017-07-25',
    },
  ];

  findAll() {
    return this.videogames;
  }

  create(createVideogameDto: CreateVideogameDto) {
    const newVideogame = {
      id: this.videogames.length + 1,
      name: createVideogameDto.name,
      genre: createVideogameDto.genre,
      date: createVideogameDto.date,
    };
    this.videogames.push(newVideogame);
    return newVideogame;
  }
}
