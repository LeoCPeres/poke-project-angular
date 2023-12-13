import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  PokemonListProps,
  PokemonSearchProps,
} from '../types/pokemon-list.interface';
import { PokemonProps } from '../types/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<PokemonListProps> {
    return this.http.get<PokemonListProps>(`${this.baseUrl}?limit=21`);
  }

  getMorePokemons(nextPageString: string): Observable<PokemonListProps> {
    return this.http.get<PokemonListProps>(nextPageString);
  }

  getPokemonById(id: number): Observable<PokemonProps> {
    return this.http.get<PokemonProps>(`${this.baseUrl}/${id}`);
  }

  getPokemonByName(name: string): Observable<PokemonSearchProps> {
    return this.http.get<PokemonSearchProps>(`${this.baseUrl}/${name}`);
  }
}
