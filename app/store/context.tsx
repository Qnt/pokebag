"use client";

import { Pokemon } from "pokenode-ts";
import { createContext, ReactNode, useState } from "react";
import { isPokemonInPokebag } from "../helpers";

const initPokebagContext = {
  pokebag: [],
  addPokemon() {},
  removePokemon() {},
};

export const PokebagContext = createContext<{
  pokebag: Pokemon[];
  addPokemon: (pokemon: Pokemon) => void;
  removePokemon: (id: number) => void;
}>(initPokebagContext);

export function PokebagProvider({ children }: { children: ReactNode }) {
  const [pokebag, setPokebag] = useState<Pokemon[]>([]);

  function addPokemon(pokemon: Pokemon) {
    if (!isPokemonInPokebag(pokemon.id, pokebag)) {
      setPokebag([...pokebag, pokemon]);
    }
  }

  function removePokemon(id: number) {
    setPokebag((prevPokebag) =>
      prevPokebag.filter((pokemon) => pokemon.id !== id),
    );
  }

  return (
    <PokebagContext.Provider value={{ pokebag, addPokemon, removePokemon }}>
      {children}
    </PokebagContext.Provider>
  );
}
