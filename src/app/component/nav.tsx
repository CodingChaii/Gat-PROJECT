// components/Nav.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="bg-gray-900 text-white px-4 py-2 flex items-center justify-between">
      {/* Left section: Logo + Links */}
      <div className="flex items-center space-x-4">
        {/* GitHub-like logo */}
        <Link href="/" className="text-2xl font-bold">
          <svg
            height="32"
            viewBox="0 0 16 16"
            version="1.1"
            width="32"
            aria-hidden="true"
            className="fill-white"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54... (trimmed)"
            />
          </svg>
        </Link>

        {/* Nav Links */}
        <Link href="/pulls" className="hover:text-gray-400">Pull requests</Link>
        <Link href="/issues" className="hover:text-gray-400">Issues</Link>
        <Link href="/marketplace" className="hover:text-gray-400">Marketplace</Link>
        <Link href="/explore" className="hover:text-gray-400">Explore</Link>
      </div>

      {/* Middle: Search Bar */}
      <div className="hidden md:block">
        <input
          type="text"
          placeholder="Search or jump to..."
          className="bg-gray-800 text-sm px-2 py-1 rounded-md border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      {/* Right section: Icons */}
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <button className="hover:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032... (trimmed)"
            />
          </svg>
        </button>

      </div>
    </nav>
  );
};

export default Nav;
