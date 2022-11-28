import { PokemonTypeToArrayPipe } from './pokemon-type-to-array.pipe';

describe('PokemonTypeToArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonTypeToArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
