"use client";

import { signIn } from "next-auth/react"

interface SignInButtonProps {
  btnValue: string;
  redirectPath: string;
}
 
export function SignInButton({ btnValue, redirectPath }: SignInButtonProps) {
  return <button onClick={() => signIn(undefined, { redirectTo: redirectPath })}>{btnValue}</button>
}