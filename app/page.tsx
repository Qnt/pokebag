import ButtonAction from "./components/button-action";
import ButtonFetch from "./components/button-fetch";
import PokebagList from "./components/pokebag-list";
import Pokecard from "./components/pokecard";
import { getRandomPokemon } from "./queries";

export default async function Home() {
  const pokemon = await getRandomPokemon();

  return (
    <main className="m-auto grid max-w-5xl grid-cols-1 items-start gap-8 p-10 md:grid-cols-2">
      <div className="flex flex-col items-center gap-2">
        <Pokecard pokemon={pokemon} />
        <ButtonAction pokemon={pokemon} />
        <ButtonFetch />
      </div>
      <PokebagList />
    </main>
  );
}
