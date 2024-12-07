import React from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface RadioControlsProps {
  isPlaying: boolean;
  volume: number;
  onVolumeChange: (value: number) => void;
  onPlayPause: () => void;
}

export function RadioControls({ 
  isPlaying, 
  volume, 
  onVolumeChange, 
  onPlayPause 
}: RadioControlsProps) {
  return (
    <div className="mt-6 flex items-center gap-4">
      <button 
        onClick={onPlayPause}
        className="bg-white rounded-full p-3 hover:scale-105 transition-transform"
      >
        {isPlaying ? (
          <Pause className="h-6 w-6 text-black" />
        ) : (
          <Play className="h-6 w-6 text-black ml-1" />
        )}
      </button>

      <div className="flex items-center gap-2 flex-1">
        <button onClick={() => onVolumeChange(volume === 0 ? 0.5 : 0)}>
          {volume === 0 ? (
            <VolumeX className="h-5 w-5 text-white/80" />
          ) : (
            <Volume2 className="h-5 w-5 text-white/80" />
          )}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
          className="w-24 h-1 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
        />
      </div>
    </div>
  );
}