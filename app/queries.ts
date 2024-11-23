"use server";

import { PokemonClient } from "pokenode-ts";

const POKEMON_MAX_ID = 1025;
const client = new PokemonClient();

export async function getRandomPokemon() {
  try {
    const res = await client.getPokemonById(
      Math.floor(Math.random() * POKEMON_MAX_ID),
    );
    return res;
  } catch (error) {
    throw new Error("Something went wrong:" + error);
  }
}
