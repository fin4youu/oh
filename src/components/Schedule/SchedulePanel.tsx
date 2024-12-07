import React, { useState } from 'react';
import { Calendar, X } from 'lucide-react';
import { ScheduleForm } from './ScheduleForm';
import { ScheduleList } from './ScheduleList';
import { useSchedule } from '../../hooks/useSchedule';

const ADMIN_PASSWORD = 'christmas2023';

export function SchedulePanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { scheduleItems, addScheduleItem } = useSchedule();

  const handleAuth = () => {
    const password = prompt('Enter admin password:');
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setIsOpen(true);
    } else {
      alert('Invalid password');
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={handleAuth}
        className="fixed bottom-6 right-6 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-105"
      >
        <Calendar className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="glass-panel w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Schedule Manager</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {isAuthenticated && <ScheduleForm onSubmit={addScheduleItem} />}
        <ScheduleList items={scheduleItems} />
      </div>
    </div>
  );
}