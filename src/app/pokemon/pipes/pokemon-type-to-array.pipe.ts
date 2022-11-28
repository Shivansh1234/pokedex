import { Pipe, PipeTransform } from '@angular/core';
import { Type } from '../models/pokemon';

@Pipe({
  name: 'pokemonTypeToArray'
})
export class PokemonTypeToArrayPipe implements PipeTransform {

  transform(pokemonType: Type[]): string[] {
    return pokemonType.map((type: Type) => type.type.name);
  }

}
