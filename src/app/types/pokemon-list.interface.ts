export type PokemonListProps = {
  count: number;
  next: string;
  previous: string;

  results: PokemonResultProps[];
};

export type PokemonResultProps = {
  name: string;
  url: string;
};

export type PokemonSearchProps = {
  forms: PokemonResultProps[];
};
