export type PokemonProps = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: PokemonSpritesProps;
  types: PokemonTypeProps[];
  stats: PokemonStats[];
};

export type PokemonSpritesProps = {
  front_default: string;
  other: {
    'official-artwork': {
      front_default: string;
    };
  };
};

export type PokemonTypeProps = {
  type: {
    name: string;
  };
};

type PokemonStats = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};
