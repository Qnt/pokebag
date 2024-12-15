import Image from "next/image";
import { Pokemon } from "pokenode-ts";

export default function PokecardPreview({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="flex flex-col gap-2 text-pretty rounded-md border-2 border-zinc-300 bg-zinc-700 p-6">
      <header>
        <h3 className="text-xl font-semibold capitalize">{pokemon.name}</h3>
        <p className="text-gray-400">{pokemon.types[0].type.name}</p>
      </header>

      {pokemon.sprites.front_default && (
        <Image
          src={pokemon.sprites.front_default}
          alt={`Image of ${pokemon.name}`}
          width={80}
          height={80}
          className="self-center"
        />
      )}
      {!pokemon.sprites.front_default && <p>Sorry, no image :(</p>}
    </div>
  );
}
