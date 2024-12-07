import React from 'react';
import { RadioPlayer } from './components/RadioPlayer';
import { ChristmasCountdown } from './components/ChristmasCountdown';
import { SantaTracker } from './components/SantaTracker';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-5xl w-full mx-auto p-4 md:p-6 space-y-6">
          <header className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold">Christmas Radio</h1>
            <span className="text-red-400">Live Radio</span>
          </header>
          
          <main className="space-y-6">
            <RadioPlayer />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ChristmasCountdown />
              <SantaTracker />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}