import { Injectable } from '@nestjs/common';
import { CreateVideogameDto } from './dto/create-videogame.dto';

@Injectable()
export class VideogamesService {
    private videogames = [
        {
        id: 1,
        name: 'Minecraft',
        genre: 'Sandbox',
        date: new Date('2011-11-18')
    },
    {
        id: 2,
        name: 'Grand Theft Auto V',
        genre: 'Open World',
        date: new Date(' 2013-09-17')
    },
    {
        id: 3,
        name: 'Fortnite',
        genre: 'Battle Royale',
        date: new Date('2017-07-25')
    }   
];

    findAll() {
        return this.videogames;
    }

    create(createVideogameDto: CreateVideogameDto) {
        const newVideogame = {
            id: Date.now(),
            name: createVideogameDto.name,
            genre: 'Unknown',
            date: new Date()
        }
        this.videogames.push(newVideogame)
        return newVideogame
    }
}