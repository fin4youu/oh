import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { Clock } from 'lucide-react';

export function ChristmasCountdown() {
  const timeLeft = useCountdown();

  return (
    <div className="glass-panel p-6 hover-scale h-full">
      <div className="flex items-center gap-3 mb-4">
        <Clock className="h-6 w-6 text-red-400" />
        <h2 className="text-xl font-bold">Time Until Christmas</h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds }
        ].map(({ label, value }) => (
          <div key={label} className="bg-white/5 rounded-lg p-3 text-center">
            <div className="text-2xl md:text-3xl font-bold mb-1">{value}</div>
            <div className="text-sm text-white/60">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}