"use client";

import { Pokemon } from "pokenode-ts";
import { useContext } from "react";
import { isPokemonInPokebag } from "../helpers";
import { PokebagContext } from "../store/context";
import BaseButton from "./base-button";
import { useRouter } from "next/navigation";

export default function ButtonAction({ pokemon }: { pokemon: Pokemon }) {
  const { pokebag, addPokemon, removePokemon } = useContext(PokebagContext);
  const isAlreadyInPokebag = isPokemonInPokebag(pokemon.id, pokebag);
  const router = useRouter();
  function handleClick() {
    if (isAlreadyInPokebag) {
      removePokemon(pokemon.id);
    } else {
      addPokemon(pokemon);
    }
    router.refresh();
  }

  return (
    <BaseButton className="rounded-md bg-sky-600 p-2" onClick={handleClick}>
      {isAlreadyInPokebag ? "Remove from pokebag" : "Add to pokebag"}
    </BaseButton>
  );
}
