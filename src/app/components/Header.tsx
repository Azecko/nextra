"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { SignInButton } from "./auth/SignInButton";
import { Session } from "next-auth";
import { SignOutButton } from "./auth/SignOutButton";
import UserAvatar from "./UserAvatar";

interface HeaderProps {
  session: Session | null;
}

export default function Header({ session }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-900">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5">
            <span className="sr-only">Nextra</span>
            <Image
              alt=""
              src="/nextra_logo.png"
              className="h-10 md:h-14 w-auto"
              width="700"
              height="700"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a
            href="https://github.com/Azecko/nextra"
            target="_blank"
            className="text-sm font-semibold leading-6 text-gray-200 transition ease-in-out hover:text-gray-400"
          >
            Issues / Pull requests
          </a>
          <a
            href="/protected"
            target="_blank"
            className="text-sm font-semibold leading-6 text-gray-200 transition ease-in-out hover:text-gray-400"
          >
            Protected route
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {session ? (
            <SignOutButton />
          ) : (
            <SignInButton btnValue="Log In" redirectPath="/" />
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-neutral-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div>
              {session && (
                <>
                  <UserAvatar session={session} />
                  {session.user?.name}
                </>
              )}
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-300">
              <div className="space-y-2 py-6">
                <a
                  href="https://github.com/Azecko/nextra"
                  target="_blank"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 transition ease-in-out hover:bg-neutral-800"
                >
                  Issues / Pull requests
                </a>
                <a
                  href="/protected"
                  target="_blank"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 transition ease-in-out hover:bg-neutral-800"
                >
                  Protected route
                </a>
              </div>
              <div className="py-6">
                {session ? (
                  <SignOutButton />
                ) : (
                  <SignInButton btnValue="Log In" redirectPath="/" />
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
