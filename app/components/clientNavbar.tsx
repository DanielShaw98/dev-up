"use client";

import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

const ClientNavbar = ({ session }: { session: any }) => {
  return (
    <nav className="bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <span className="self-center text-5xl font-semibold whitespace-nowrap font-main text-orange">DevUp</span>
        </Link>
        <div className="flex">
          {session ? (
            <>
              <Link
                href="/dashboard"
                className="text-white hover:text-orange font-sub font-light text-xl transition-all duration-200 ease-in-out px-12 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange"
              >
                Dashboard
              </Link>
              <Link
                href="/projects"
                className="text-white hover:text-orange font-sub font-light text-xl transition-all duration-200 ease-in-out px-12 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange"
              >
                Projects
              </Link>
              <Link
                href="/profile"
                className="text-white hover:text-orange font-sub font-light text-xl transition-all duration-200 ease-in-out px-12 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange"
              >
                Profile
              </Link>
              <button
                onClick={() => signOut()}
                className="text-white hover:text-orange font-sub font-light text-xl transition-all duration-200 ease-in-out px-12 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link
              href="/auth/signin"
              className="text-white hover:text-orange font-sub font-light text-xl transition-all duration-200 ease-in-out px-12 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default ClientNavbar;
