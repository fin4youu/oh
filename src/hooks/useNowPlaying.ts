import { useState, useEffect } from 'react';
import { getAlbumArt } from '../services/lastfm';

interface NowPlaying {
  streamTitle: string;
  artist: string;
  title: string;
  albumArt: string;
}

export function useNowPlaying() {
  const [nowPlaying, setNowPlaying] = useState<NowPlaying>({
    streamTitle: '',
    artist: '',
    title: '',
    albumArt: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400'
  });

  useEffect(() => {
    const eventSource = new EventSource('https://api.zeno.fm/mounts/metadata/subscribe/zvtdy1ynychvv/');
    
    eventSource.onmessage = async (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.streamTitle && data.streamTitle !== nowPlaying.streamTitle) {
          const [artist, title] = data.streamTitle.split(' - ').map(s => s.trim());
          const albumArt = await getAlbumArt(artist, title);
          
          setNowPlaying({
            streamTitle: data.streamTitle,
            artist,
            title,
            albumArt
          });
        }
      } catch (error) {
        console.error('Error parsing metadata:', error);
      }
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return { nowPlaying };
}