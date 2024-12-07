import React from 'react';
import { Gift, Radio, Calendar, MapPin } from 'lucide-react';
import { NavLink } from './NavLink';

export function Sidebar() {
  return (
    <aside className="w-64 bg-black/30 backdrop-blur-xl h-screen p-6">
      <div className="flex items-center gap-2 mb-8">
        <Gift className="h-8 w-8 text-red-500" />
        <span className="text-white text-xl font-bold">Christmas Hub</span>
      </div>
      
      <nav className="space-y-4">
        <NavLink icon={<Radio />} href="#radio">Radio</NavLink>
        <NavLink icon={<Calendar />} href="#countdown">Countdown</NavLink>
        <NavLink icon={<MapPin />} href="#tracker">Santa Tracker</NavLink>
      </nav>
    </aside>
  );
}