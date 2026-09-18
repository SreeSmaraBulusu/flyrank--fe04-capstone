import Navbar from "@/components/Navbar";
import React from "react";

export default function Projects() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="mt-8 rounded-xl bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold">Projects Placeholder</h2>
          <p className="mt-3 text-gray-600">
            Project content will be implemented in a later phase.
          </p>
        </div>
      </section>
    </main>
  );
}