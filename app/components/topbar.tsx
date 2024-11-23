import Link from "next/link";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between p-4">
      <Link href="/" className="text-4xl hover:text-sky-600">
        Pokemon Enjoyer
      </Link>
      <Link href="/pokebag" className="underline hover:text-sky-600">
        Pokebag
      </Link>
    </div>
  );
}
