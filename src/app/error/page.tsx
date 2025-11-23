"use client";

import Link from "next/link";

export default function HandleError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121010] text-white p-6">
      <div className="max-w-2xl text-center">
        <h2 className="text-2xl font-bold mb-4">404 – Game Not Found</h2>
        <p className="mb-6"> Please...try again later</p>
        <Link
          href="/"
          className="inline-block  px-4 py-2 rounded hover:text-green-500 transition"
        >
         ← Back
        </Link>
      </div>
    </div>
  );
}
