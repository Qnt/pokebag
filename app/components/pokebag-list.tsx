"use client";

import { useContext } from "react";
import { PokebagContext } from "../store/context";
import PokecardPreview from "./pokecard-preview";

export default function PokebagList() {
  const { pokebag } = useContext(PokebagContext);
  return (
    <>
      <div className="grid-cols-[repeat(auto-fill,minmax(160px,1fr)) grid gap-2">
        {pokebag.map((pokemon) => (
          <PokecardPreview pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </>
  );
}
