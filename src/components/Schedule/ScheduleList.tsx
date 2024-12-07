import React from 'react';
import { ScheduleItem } from '../../types/schedule';

interface ScheduleListProps {
  items: ScheduleItem[];
}

export function ScheduleList({ items }: ScheduleListProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
          <img
            src={item.avatarUrl}
            alt={item.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-sm text-white/60">
              {new Date(item.datetime).toLocaleString()} ({item.duration} minutes)
            </p>
          </div>
        </div>
      ))}
      {items.length === 0 && (
        <p className="text-center text-white/60">No scheduled slots yet</p>
      )}
    </div>
  );
}