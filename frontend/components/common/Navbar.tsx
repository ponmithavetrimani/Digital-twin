"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  Search,
  User,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const username =
    typeof window !== "undefined"
      ? localStorage.getItem("username") || "Ponmitha"
      : "Ponmitha";

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Chat",
      href: "/chat",
    },
    {
      name: "Memory",
      href: "/memory",
    },
    {
      name: "Profile",
      href: "/profile",
    },
    {
      name: "Settings",
      href: "/settings",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-pink-100 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <Link
          href="/dashboard"
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-pink-600 to-pink-800 flex items-center justify-center text-white text-2xl shadow-lg">
            🤖
          </div>

          <div>
            <h1 className="font-bold text-xl">
              Digital Twin
            </h1>

            <p className="text-xs text-gray-500">
              AI Personality Replica
            </p>
          </div>
        </Link>

        {/* Navigation */}

        <nav className="hidden md:flex gap-8">

          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-medium transition ${
                pathname === item.href
                  ? "text-pink-600"
                  : "text-gray-600 hover:text-pink-600"
              }`}
            >
              {item.name}
            </Link>
          ))}

        </nav>

        {/* Right */}

        <div className="flex items-center gap-4">

          {/* Search */}

          <div className="hidden lg:flex items-center bg-pink-50 rounded-full px-4 py-2">

            <Search
              size={18}
              className="text-gray-500"
            />

            <input
              placeholder="Search..."
              className="bg-transparent outline-none ml-2 text-sm"
            />

          </div>

          {/* Notification */}

          <button className="relative w-11 h-11 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center transition">

            <Bell
              size={20}
              className="text-pink-700"
            />

            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>

          </button>

          {/* Profile */}

          <Link
            href="/profile"
            className="flex items-center gap-3 bg-pink-50 rounded-full px-3 py-2 hover:bg-pink-100 transition"
          >

            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-600 to-pink-800 text-white flex items-center justify-center">

              <User size={20} />

            </div>

            <div className="hidden lg:block">

              <h3 className="font-semibold text-sm">
                {username}
              </h3>

              <p className="text-xs text-gray-500">
                AI Owner
              </p>

            </div>

          </Link>

        </div>

      </div>

    </header>
  );
}