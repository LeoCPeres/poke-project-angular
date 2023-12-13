import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonProps } from 'src/app/types/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input('pokemonUrl') pokemonUrl: string = '';

  pokemon: PokemonProps = {} as PokemonProps;
  pokemonAttack: number = 0;
  pokemonDefense: number = 0;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    const pokemonId = Number(this.pokemonUrl.split('/')[6]);

    this.pokemonService.getPokemonById(pokemonId).subscribe((pokemon) => {
      this.pokemon = pokemon;

      this.pokemonAttack =
        pokemon?.stats?.find((x) => x.stat.name === 'attack')?.base_stat || 0;
      this.pokemonDefense =
        pokemon?.stats?.find((x) => x.stat.name === 'defense')?.base_stat || 0;
    });
  }
}
