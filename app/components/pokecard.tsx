import Image from "next/image";
import { Pokemon } from "pokenode-ts";

export default function Pokecard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="flex w-fit min-w-64 flex-col items-stretch gap-4 text-pretty rounded-md border-2 border-zinc-300 bg-zinc-700 p-6">
      <header>
        <h3 className="text-4xl font-semibold capitalize">{pokemon.name}</h3>
        <p className="text-gray-400">{pokemon.types[0].type.name}</p>
      </header>
      {pokemon.sprites.front_default && (
        <Image
          src={pokemon.sprites.front_default}
          alt={`Image of ${pokemon.name}`}
          width={100}
          height={100}
          className="w-full"
        />
      )}
      {!pokemon.sprites.front_default && <p>Sorry, no image :(</p>}
    </div>
  );
}
