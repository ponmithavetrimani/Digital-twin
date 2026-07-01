"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageCircle,
  Brain,
  User,
  Settings,
  LogOut,
  Bot,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Chat",
      href: "/chat",
      icon: MessageCircle,
    },
    {
      title: "Memory",
      href: "/memory",
      icon: Brain,
    },
    {
      title: "Profile",
      href: "/profile",
      icon: User,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="hidden lg:flex w-72 min-h-screen bg-white border-r border-pink-100 shadow-xl flex-col">

      {/* Logo */}

      <div className="p-8 border-b border-pink-100">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-600 to-pink-800 flex items-center justify-center text-white shadow-lg">
            <Bot size={30} />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Digital Twin
            </h2>

            <p className="text-sm text-gray-500">
              AI Personality
            </p>
          </div>

        </div>

      </div>

      {/* Menu */}

      <nav className="flex-1 px-5 py-8 space-y-3">

        {menuItems.map((item) => {

          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
                active
                  ? "bg-gradient-to-r from-pink-600 to-pink-800 text-white shadow-lg"
                  : "text-gray-600 hover:bg-pink-50 hover:text-pink-700"
              }`}
            >
              <Icon size={22} />

              <span className="font-medium">
                {item.title}
              </span>
            </Link>
          );
        })}

      </nav>

      {/* Bottom Card */}

      <div className="p-5">

        <div className="rounded-3xl bg-gradient-to-r from-pink-600 to-pink-800 p-6 text-white shadow-lg">

          <h3 className="text-xl font-bold">
            AI Twin
          </h3>

          <p className="text-sm opacity-90 mt-2">
            Your Digital Twin is continuously learning your personality.
          </p>

          <div className="mt-5">

            <div className="h-2 rounded-full bg-pink-300">

              <div className="h-2 w-[87%] rounded-full bg-white"></div>

            </div>

            <p className="text-xs mt-2">
              Personality Match • 87%
            </p>

          </div>

        </div>

        {/* Logout */}

        <Link
          href="/login"
          className="mt-6 flex items-center gap-3 text-red-500 hover:bg-red-50 rounded-2xl px-5 py-4 transition"
        >
          <LogOut size={20} />

          <span className="font-medium">
            Logout
          </span>

        </Link>

      </div>

    </aside>
  );
}