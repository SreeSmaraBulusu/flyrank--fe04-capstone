import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          Capstone App
        </Link>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/settings" className="hover:underline">Settings</Link>
          <Link href="/health" className="hover:underline">Health</Link>
        </div>
      </div>
    </nav>
  );
}