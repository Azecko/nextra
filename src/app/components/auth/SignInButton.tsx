"use client";

import { signIn } from "next-auth/react"
import { Button } from "@headlessui/react";

interface SignInButtonProps {
  btnValue: string;
  redirectPath: string;
}
 
export function SignInButton({ btnValue, redirectPath }: SignInButtonProps) {
  return (
    <Button
      className="rounded-xl text-sm font-semibold bg-sky-500 py-2 px-4 text-sm text-white transition ease-in-out data-[hover]:bg-sky-600"
      onClick={() => signIn(undefined, { redirectTo: redirectPath })}>
        {btnValue}
    </Button>
  )
}