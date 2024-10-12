"use client";

import Toggle from "@/components/Toggle";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 left-16 w-52 h-48 bg-purple-600 filter blur-2xl opacity-70 mix-blend-multiply animate-blob"></div>
        <div className="absolute top-0 right-0 w-52 h-48 bg-yellow-600 filter blur-2xl opacity-70 mix-blend-multiply animation-delay-2000 animate-blob"></div>
        <div className="absolute bottom-0 right-32 w-52 h-48 bg-red-600 filter blur-2xl opacity-70 mix-blend-multiply animation-delay-4000 animate-blob"></div>
      </div>
    </main>
  );
}
