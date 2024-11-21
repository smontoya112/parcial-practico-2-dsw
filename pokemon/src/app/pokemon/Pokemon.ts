import { Trainer } from '../trainer/Trainer';

export class Pokemon {
  id: number;
  name: string;
  imageUrl: string;
  type: string;
  abilities: string[];
  level: number;

  public constructor(
    id: number,
    name: string,
    imageUrl: string,
    type: string,
    abilities: string[],
    level: number
  ) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.type = type;
    this.abilities = abilities;
    this.level = level;
  }
}
