"use client";

import React from "react";
import Link from "next/link";
import { signOut, signIn } from "next-auth/react";

const ClientNavbar = ({ session }: { session: any }) => {
  return (
    <nav>
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <span className="self-center text-5xl font-semibold whitespace-nowrap font-main text-orange">DevUp</span>
        </Link>

        <div className="flex-grow flex justify-center">
          {session ? (
            <>
              <Link
                href="/"
                className="text-white hover:text-orange font-sub font-light text-xl transition-all duration-200 ease-in-out px-6 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange"
              >
                Dashboard
              </Link>
              <Link
                href="/projects"
                className="text-white hover:text-orange font-sub font-light text-xl transition-all duration-200 ease-in-out px-6 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange"
              >
                Projects
              </Link>
              <Link
                href="/profile"
                className="text-white hover:text-orange font-sub font-light text-xl transition-all duration-200 ease-in-out px-6 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange"
              >
                Profile
              </Link>
            </>
          ) : null}
        </div>

        <div className="flex items-center space-x-4">
          {session ? (
            <button
              onClick={() => signOut()}
              className="text-white hover:text-orange font-sub font-light text-xl transition-all duration-200 ease-in-out px-6 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="text-white hover:text-orange font-sub font-light text-xl transition-all duration-200 ease-in-out px-6 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default ClientNavbar;
