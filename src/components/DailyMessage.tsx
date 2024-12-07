import React from 'react';
import { Calendar } from 'lucide-react';
import { santaMessages } from '../data/santaMessages';

export function DailyMessage() {
  const today = new Date();
  const isDecember = today.getMonth() === 11;
  const currentDay = today.getDate();
  
  const message = isDecember && currentDay <= 25 
    ? santaMessages.find(msg => msg.day === currentDay)
    : santaMessages[0];

  return (
    <div className="glass-panel p-8 hover-scale">
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="h-6 w-6 text-red-400" />
        <h2 className="text-xl font-bold">Message from Santa</h2>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <img 
          src={message.imageUrl} 
          alt="Christmas mood" 
          className="w-full md:w-64 h-64 rounded-xl object-cover shadow-lg"
        />
        <div className="flex-1 space-y-4">
          <span className="inline-block bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium">
            {message.mood}
          </span>
          <p className="text-xl leading-relaxed">
            {message.message}
          </p>
        </div>
      </div>
    </div>
  );
}