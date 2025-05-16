import { IsString, MinLength } from 'class-validator';

export class CreateVideogameDto {
  @IsString()
  @MinLength(5, { message: 'Videogame name must be longer than 4 characters' })
  name: string;

  @IsString()
  @MinLength(3, { message: 'Genre must be longer than 2 characters' })
  genre: string;
}
