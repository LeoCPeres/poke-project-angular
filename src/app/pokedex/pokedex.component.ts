import { Component, OnInit } from '@angular/core';
import { PokemonResultProps } from '../types/pokemon-list.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  pokemons: PokemonResultProps[] = [];
  nextPageString: string = '';

  constructor(private pokemonService: PokemonService) {}

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((pokemon) => {
      this.pokemons = pokemon.results;
      this.nextPageString = pokemon.next;
    });
  }

  loadMorePokemons(): void {
    this.pokemonService
      .getMorePokemons(this.nextPageString)
      .subscribe((pokemon) => {
        this.pokemons = [...this.pokemons, ...pokemon.results];
        this.nextPageString = pokemon.next;
      });
  }

  searchPokemon(pokemonName: string): void {
    if (pokemonName === '') {
      this.pokemonService.getPokemons().subscribe((pokemon) => {
        this.pokemons = pokemon.results;
        this.nextPageString = pokemon.next;
      });
      return;
    }

    this.pokemonService.getPokemonByName(pokemonName).subscribe((pokemon) => {
      this.pokemons = pokemon.forms;
    });
  }
}
