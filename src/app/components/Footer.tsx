"use client";

import Image from "next/image";
import LinkHref from "./LinkHref";

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-neutral-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="flex items-center gap-5 justify-center">
                <Image
                  alt=""
                  src="/nextra_logo.png"
                  className="h-10 md:h-14 w-auto"
                  width="700"
                  height="700"
                />
                <span>Coded with 💙 by <LinkHref href="https://github.com/Azecko/" text="Azecko" target="_blank" /></span>
              </div>
                <ul className="flex flex-wrap justify-center mt-4 md:mt-0 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="https://github.com/Azecko/nextra/"
                          target="_blank"
                          className="text-gray-300 underline transition ease-in-out hover:text-gray-400 me-4 md:me-6">GitHub repositroy
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  );
}
