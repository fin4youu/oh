import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function LetterToSanta() {
  const [letter, setLetter] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    // In a real app, this would send the letter to a backend
  };

  return (
    <div className="bg-gradient-to-r from-green-600 to-green-500 p-6 rounded-lg text-white">
      <h2 className="text-2xl font-bold mb-4">Write to Santa</h2>
      
      {sent ? (
        <div className="bg-white/10 p-4 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Letter Sent! 🎄</h3>
          <p>Santa will read your letter soon!</p>
          <button 
            onClick={() => {
              setSent(false);
              setLetter('');
            }}
            className="mt-4 bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-full"
          >
            Write Another Letter
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
            placeholder="Dear Santa..."
            className="w-full h-32 bg-white/10 rounded-lg p-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            className="w-full bg-white/20 hover:bg-white/30 transition-colors py-3 rounded-lg flex items-center justify-center gap-2"
          >
            <Send className="h-5 w-5" />
            Send to Santa
          </button>
        </form>
      )}
    </div>
  );
}