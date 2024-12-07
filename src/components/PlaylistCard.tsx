import React from 'react';
import { Play } from 'lucide-react';

interface PlaylistCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export function PlaylistCard({ title, description, imageUrl }: PlaylistCardProps) {
  return (
    <div className="bg-zinc-800/40 group rounded-md p-4 hover:bg-zinc-800 transition-all">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full aspect-square object-cover rounded-md mb-4" 
        />
        <button className="absolute bottom-2 right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          <Play fill="black" className="h-6 w-6 text-black ml-1" />
        </button>
      </div>
      <h3 className="text-white font-bold mb-1">{title}</h3>
      <p className="text-zinc-400 text-sm">{description}</p>
    </div>
  );
}