import { Pokemon } from "pokenode-ts";

export function isPokemonInPokebag(id: number, pokebag: Pokemon[]) {
  if (!pokebag.length) return false;
  return pokebag.some((p) => p.id === id);
}
