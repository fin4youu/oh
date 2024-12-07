import React, { useState } from 'react';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { useNowPlaying } from '../hooks/useNowPlaying';
import { Play, Pause, Heart } from 'lucide-react';
import { VolumeControl } from './VolumeControl';
import toast from 'react-hot-toast';

export function RadioPlayer() {
  const { isPlaying, volume, setVolume, togglePlay } = useAudioPlayer();
  const { nowPlaying } = useNowPlaying();
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast.success(isLiked ? 'Removed from favorites' : 'Added to favorites', {
      style: {
        background: '#27272a',
        color: '#fff',
        borderRadius: '0.75rem',
      },
      iconTheme: {
        primary: '#f87171',
        secondary: '#fff',
      },
    });
  };

  return (
    <>
      <div className="album-art-background">
        <img 
          src={nowPlaying.albumArt}
          alt=""
          className="transition-all duration-1000"
        />
      </div>
      
      <div className={`glass-panel p-4 md:p-8 transition-all duration-500 ${isPlaying ? 'opacity-100' : 'opacity-90'}`}>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="relative group w-full md:w-auto">
            <img 
              src={nowPlaying.albumArt}
              alt={nowPlaying.streamTitle}
              className="w-full md:w-48 h-48 object-cover rounded-xl shadow-2xl"
            />
            <button 
              onClick={togglePlay}
              className={`absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/40 rounded-xl transition-all duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
            >
              {isPlaying ? (
                <Pause className="w-12 h-12" />
              ) : (
                <Play className="w-12 h-12 ml-1" />
              )}
            </button>
          </div>
          
          <div className="flex-1 w-full md:w-auto">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">Now Playing</h2>
                {nowPlaying.streamTitle ? (
                  <div>
                    <p className="text-lg md:text-xl font-medium">{nowPlaying.title}</p>
                    <p className="text-red-400">{nowPlaying.artist}</p>
                  </div>
                ) : (
                  <p className="text-lg md:text-xl text-red-400">Click play to start listening</p>
                )}
              </div>
              <button 
                onClick={handleLike}
                className="text-2xl"
              >
                <Heart 
                  className={`w-6 h-6 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-white/60 hover:text-red-500'}`} 
                />
              </button>
            </div>
            
            <VolumeControl volume={volume} onVolumeChange={setVolume} />
          </div>
        </div>
      </div>
    </>
  );
}