import React from 'react';
import { Volume2, VolumeX, Volume1 } from 'lucide-react';

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (value: number) => void;
}

export function VolumeControl({ volume, onVolumeChange }: VolumeControlProps) {
  const VolumeIcon = volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  return (
    <div className="flex items-center gap-4">
      <button 
        onClick={() => onVolumeChange(volume === 0 ? 0.5 : 0)}
        className="text-white/80 hover:text-white transition-colors"
      >
        <VolumeIcon className="w-6 h-6" />
      </button>
      
      <div className="relative flex-1 h-2">
        <div className="absolute inset-0 bg-white/20 rounded-full">
          <div 
            className="absolute inset-y-0 left-0 bg-white/40 rounded-full transition-all"
            style={{ width: `${volume * 100}%` }}
          />
        </div>
        
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
}