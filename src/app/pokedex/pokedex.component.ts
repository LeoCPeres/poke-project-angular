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

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((pokemon) => {
      this.pokemons = pokemon.results;
      console.log(pokemon);
    });
  }
}
