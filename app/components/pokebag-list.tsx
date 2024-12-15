"use client";

import { useContext } from "react";
import { PokebagContext } from "../store/context";
import PokecardPreview from "./pokecard-preview";

export default function PokebagList() {
  const { pokebag } = useContext(PokebagContext);
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-2">
        {pokebag.map((pokemon) => (
          <PokecardPreview pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </>
  );
}
