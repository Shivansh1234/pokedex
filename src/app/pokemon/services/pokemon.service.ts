import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { POKEMON_LIST } from '../pokemon.constant';
import { Pokemon } from '../models/pokemon';
import { PokemonList } from '../models/pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonListRequest(index: number, size: number): Observable<PokemonList> {
    return this.http.get<PokemonList>(`${POKEMON_LIST}?limit=${size}&offset=${index}`);
  }

  getPokemonInfoRequest(pokemonInfoUrl: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(pokemonInfoUrl);
  }
}
