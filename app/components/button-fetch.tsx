"use client";

import { useRouter } from "next/navigation";
import BaseButton from "./base-button";

export default function ButtonFetch() {
  const router = useRouter();

  return (
    <BaseButton
      className="rounded-md bg-sky-600 p-2"
      onClick={() => router.refresh()}
    >
      Next pokemon
    </BaseButton>
  );
}
