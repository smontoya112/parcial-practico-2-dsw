import { Trainer } from './Trainer';
import { Pokemon } from '../pokemon/Pokemon';

export const dataTrainers: Array<Trainer> = [
  new Trainer(
    1,
    'Ash Ketchum',
    10,
    'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/0/02/latest/20221113131941/Ash_%28Viajes_Pok%C3%A9mon%29_2.png/250px-Ash_%28Viajes_Pok%C3%A9mon%29_2.png',
    'Ash Ketchum is the main character of the Pokémon anime. He is also the main character of various manga based on the anime, including The Electric Tale of Pikachu, Ash & Pikachu, and Pocket Monsters Diamond & Pearl.',
    'Ash Ketchum is a Pokémon Trainer from Pallet Town whose goal is to become a Pokémon Master. He is the main protagonist of I Choose You! and its sequel, Pokémon Journeys: The Series.',
    [
      new Pokemon(
        1,
        'Pikachu',
        'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/77/latest/20150621181250/Pikachu.png/200px-Pikachu.png',
        'Electric',
        ['Static'],
        100
      ),
      new Pokemon(
        2,
        'Bulbasaur',
        'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/43/latest/20190406170624/Bulbasaur.png/200px-Bulbasaur.png',
        'Grass/Poison',
        ['Overgrow'],
        100
      ),
      new Pokemon(
        3,
        'Charizard',
        'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/95/latest/20160817212623/Charizard.png/200px-Charizard.png',
        'Fire/Flying',
        ['Blaze'],
        100
      ),
    ]
  ),
  new Trainer(
    2,
    'Misty',
    10,
    'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/fd/latest/20180812024731/Misty_LGPE.png/250px-Misty_LGPE.png',
    'Misty is a character whose first appearance was in the very first episode of the Pokémon anime. She is the Gym Leader of the Cerulean Gym but is often away traveling and competing in Pokémon Contests.',
    'Misty is a character whose first appearance was in the very first episode of the Pokémon anime. She is the Gym Leader of the Cerulean Gym but is often away traveling and competing in Pokémon Contests.',
    [
      new Pokemon(
        4,
        'Psyduck',
        'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/32/latest/20230614194705/Psyduck.png/200px-Psyduck.png',
        'Water',
        ['Damp'],
        100
      ),
      new Pokemon(
        5,
        'Starmie',
        'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/56/latest/20230702052551/Starmie.png/200px-Starmie.png',
        'Water/Psychic',
        ['Illuminate'],
        100
      ),
      new Pokemon(
        6,
        'Goldeen',
        'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/99/latest/20230702052345/Goldeen.png/200px-Goldeen.png',
        'Water',
        ['Swift Swim'],
        100
      ),
    ]
  ),
  new Trainer(
    3,
    'Brock',
    15,
    'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/3b/latest/20180812021535/Brock_LGPE.png/250px-Brock_LGPE.png',
    'Brock is a character whose first appearance was in the very first episode of the Pokémon anime. He is the Gym Leader of Pewter City and specializes in Rock-type Pokémon.',
    'Brock is a character whose first appearance was in the very first episode of the Pokémon anime. He is the Gym Leader of Pewter City and specializes in Rock-type Pokémon.',
    [
      new Pokemon(
        7,
        'Onix',
        'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/b2/latest/20141214194849/Onix.png/200px-Onix.png',
        'Rock/Ground',
        ['Rock Head'],
        100
      ),
      new Pokemon(
        8,
        'Geodude',
        'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/12/latest/20230620061559/Geodude.png/200px-Geodude.png',
        'Rock/Ground',
        ['Rock Head'],
        100
      ),
      new Pokemon(
        9,
        'Zubat',
        'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/6/67/latest/20230617053751/Zubat.png/200px-Zubat.png',
        'Poison/Flying',
        ['Inner Focus'],
        100
      ),
    ]
  ),
];
