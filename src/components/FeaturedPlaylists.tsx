import React from 'react';
import { PlaylistCard } from './PlaylistCard';

export function FeaturedPlaylists() {
  const playlists = [
    {
      title: "Christmas Classics",
      description: "Timeless holiday favorites that never get old",
      imageUrl: "https://images.unsplash.com/photo-1543258103-a62bdc069871?w=300"
    },
    {
      title: "Modern Holiday Hits",
      description: "Contemporary Christmas songs to brighten your day",
      imageUrl: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=300"
    },
    {
      title: "Winter Wonderland",
      description: "Cozy tunes for snowy days",
      imageUrl: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=300"
    }
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-white mb-6">Featured Holiday Playlists</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist.title} {...playlist} />
        ))}
      </div>
    </div>
  );
}