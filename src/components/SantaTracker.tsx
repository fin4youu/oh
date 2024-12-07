import React from 'react';
import { MapPin, Gift } from 'lucide-react';

export function SantaTracker() {
  const isChristmasEve = new Date().getMonth() === 11 && new Date().getDate() === 24;

  return (
    <div className="glass-panel p-6 hover-scale flex flex-col justify-center h-full">
      <div className="flex items-center gap-3 mb-4">
        <MapPin className="h-6 w-6 text-red-400" />
        <h2 className="text-xl font-bold">Santa's Location</h2>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="bg-red-500/20 rounded-full p-3">
          <Gift className="h-8 w-8 text-red-400" />
        </div>
        <div>
          <p className="text-lg font-medium mb-1">
            {isChristmasEve ? "Santa is delivering presents!" : "North Pole - Preparing with the elves"}
          </p>
          {!isChristmasEve && (
            <p className="text-sm text-white/60">
              Check back on December 24th to track Santa's journey!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}