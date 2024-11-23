"use client";

import { ButtonHTMLAttributes } from "react";

export default function BaseButton({
  children,
  onClick,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="rounded-md bg-sky-600 p-2" onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
