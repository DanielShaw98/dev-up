"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signOut, signIn } from "next-auth/react";

const ClientNavbar = ({ session }: { session: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <span className="text-3xl md:text-5xl font-semibold whitespace-nowrap font-main text-orange">
            DevUp
          </span>
        </Link>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="text-white md:hidden flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex md:items-center md:space-x-4 md:grow">
          {session ? (
            <div className="flex flex-row md:justify-center md:grow">
              <Link
                href="/"
                className="text-white hover:text-orange font-sub font-light text-lg md:text-xl transition-all duration-200 ease-in-out px-4 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-white hover:text-orange font-sub font-light text-lg md:text-xl transition-all duration-200 ease-in-out px-4 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange"
              >
                Projects
              </Link>
              <Link
                href="/profile"
                className="text-white hover:text-orange font-sub font-light text-lg md:text-xl transition-all duration-200 ease-in-out px-4 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange"
              >
                Profile
              </Link>
            </div>
          ) : null}
        </div>

        {/* Sign In/Out Button */}
        <div className="hidden md:flex items-center space-x-4">
          {session ? (
            <button
              onClick={() => signOut()}
              className="text-white hover:text-orange font-sub font-light text-lg md:text-xl transition-all duration-200 ease-in-out px-4 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="text-white hover:text-orange font-sub font-light text-lg md:text-xl transition-all duration-200 ease-in-out px-4 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange"
            >
              Sign In
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`relative top-full left-0 w-full mt-2 ${
          isOpen ? "block" : "hidden"
        } md:hidden`}
      >
        {session ? (
          <div className="flex flex-row items-baseline justify-center space-y-2 p-4">
            <Link
              href="/"
              className="text-white hover:text-orange font-sub font-light text-lg transition-all duration-200 ease-in-out px-4 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-white hover:text-orange font-sub font-light text-lg transition-all duration-200 ease-in-out px-4 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange"
            >
              Projects
            </Link>
            <Link
              href="/profile"
              className="text-white hover:text-orange font-sub font-light text-lg transition-all duration-200 ease-in-out px-4 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange"
            >
              Profile
            </Link>
            <button
              onClick={() => signOut()}
              className="text-white hover:text-orange font-sub font-light text-lg transition-all duration-200 ease-in-out px-4 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-2 p-4">
            <button
              onClick={() => signIn()}
              className="text-white hover:text-orange font-sub font-light text-lg transition-all duration-200 ease-in-out px-4 py-2 border border-white rounded-lg hover:rounded-3xl hover:border-orange"
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ClientNavbar;
