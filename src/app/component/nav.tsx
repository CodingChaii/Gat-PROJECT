// components/Nav.tsx
"use client";

import Link from "next/link";


const Nav = () => {
  return (
    <nav className="bg-gray-900 text-white px-4 py-2 flex items-center justify-between">
      {/* Left section: Logo + Links */}
      <div className="flex items-center space-x-4">
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

   
    </nav>
  );
};

export default Nav;
