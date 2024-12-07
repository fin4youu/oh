import React from 'react';
import { Clock } from 'lucide-react';

export function NowPlaying() {
  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <Clock className="w-5 h-5 text-emerald-400" />
        <h2 className="text-lg font-semibold">Now</h2>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-emerald-400/20 rounded-lg flex items-center justify-center">
          <span className="font-mono">1:00</span>
        </div>
        <div>
          <p className="font-medium">AutoDJ</p>
          <p className="text-sm text-emerald-400">PM</p>
        </div>
      </div>
    </div>
  );
}