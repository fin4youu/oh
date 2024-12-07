import React from 'react';
import { Clock } from 'lucide-react';

export function Schedule() {
  const currentHour = new Date().getHours();
  
  return (
    <div className="glass-panel p-6">
      <div className="flex items-center gap-3 mb-6">
        <Clock className="h-6 w-6 text-red-400" />
        <h2 className="text-xl font-bold">Schedule</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1513297887119-d46091b24bfa?w=100"
                alt="Santa"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="absolute -bottom-2 -right-2 bg-red-400 text-sm font-medium px-2 py-0.5 rounded">
                {currentHour}:00
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Now Playing</h3>
              <p className="text-sm text-red-400">AutoDJ</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1513297887119-d46091b24bfa?w=100"
                alt="Santa"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="absolute -bottom-2 -right-2 bg-red-400 text-sm font-medium px-2 py-0.5 rounded">
                {(currentHour + 1) % 24}:00
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Up Next</h3>
              <p className="text-sm text-red-400">AutoDJ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}