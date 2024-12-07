import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full py-4 text-center text-white/60">
      <p className="flex items-center justify-center gap-1">
        Developed with <Heart className="h-4 w-4 text-red-400 fill-red-400" /> from Portsmouth, UK | 2024 © voxium.shop
      </p>
    </footer>
  );
}