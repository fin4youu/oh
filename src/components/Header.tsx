import React from 'react';
import { User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-[#121212]/90 backdrop-blur-md sticky top-0 z-10 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Christmas Radio</h1>
        <button className="bg-white/10 hover:bg-white/20 transition-colors rounded-full p-2">
          <User className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}