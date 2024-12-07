const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400';

export async function getAlbumArt(artist: string, title: string): Promise<string> {
  if (!artist || !title) return DEFAULT_IMAGE;
  
  try {
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${API_KEY}&artist=${encodeURIComponent(artist)}&track=${encodeURIComponent(title)}&format=json`
    );
    
    if (!response.ok) throw new Error('Failed to fetch from Last.fm');
    
    const data = await response.json();
    
    if (data.track?.album?.image) {
      // Get the largest available image
      const images = data.track.album.image;
      const extraLarge = images.find((img: any) => img.size === 'extralarge');
      const large = images.find((img: any) => img.size === 'large');
      
      if (extraLarge && extraLarge['#text']) return extraLarge['#text'];
      if (large && large['#text']) return large['#text'];
    }
    
    // Try searching for the artist image as fallback
    const artistResponse = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${encodeURIComponent(artist)}&api_key=${API_KEY}&format=json`
    );
    
    if (artistResponse.ok) {
      const artistData = await artistResponse.json();
      if (artistData.artist?.image) {
        const images = artistData.artist.image;
        const mega = images.find((img: any) => img.size === 'mega');
        const extraLarge = images.find((img: any) => img.size === 'extralarge');
        
        if (mega && mega['#text']) return mega['#text'];
        if (extraLarge && extraLarge['#text']) return extraLarge['#text'];
      }
    }
    
    return DEFAULT_IMAGE;
  } catch (error) {
    console.error('Error fetching album art:', error);
    return DEFAULT_IMAGE;
  }
}