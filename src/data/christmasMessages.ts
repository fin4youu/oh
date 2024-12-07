interface ChristmasMessage {
  day: number;
  message: string;
  mood: string;
  imageUrl: string;
}

export const christmasMessages: ChristmasMessage[] = [
  {
    day: 1,
    message: "The magic of Christmas begins! Time to start decorating the tree.",
    mood: "Excited",
    imageUrl: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=400"
  },
  {
    day: 2,
    message: "Baking cookies fills the house with warmth and holiday cheer.",
    mood: "Cozy",
    imageUrl: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400"
  },
  // Add more messages for each day...
  {
    day: 24,
    message: "Santa's sleigh is loaded and ready for takeoff! The most magical night is here!",
    mood: "Magical",
    imageUrl: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400"
  },
  {
    day: 25,
    message: "Merry Christmas! May your day be filled with joy and wonder!",
    mood: "Joyful",
    imageUrl: "https://images.unsplash.com/photo-1543258103-a62bdc069871?w=400"
  }
];