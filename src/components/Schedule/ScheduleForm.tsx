import React, { useState } from 'react';
import { ScheduleItem } from '../../types/schedule';

interface ScheduleFormProps {
  onSubmit: (item: ScheduleItem) => void;
}

export function ScheduleForm({ onSubmit }: ScheduleFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    avatarUrl: '',
    date: '',
    time: '',
    duration: '30',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Date.now().toString(),
      name: formData.name,
      avatarUrl: formData.avatarUrl,
      datetime: new Date(`${formData.date}T${formData.time}`).toISOString(),
      duration: parseInt(formData.duration),
    });
    setFormData({ name: '', avatarUrl: '', date: '', time: '', duration: '30' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="bg-white/5 rounded-lg p-2 border border-white/10 focus:border-red-500 outline-none"
          required
        />
        <input
          type="url"
          placeholder="Avatar URL"
          value={formData.avatarUrl}
          onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
          className="bg-white/5 rounded-lg p-2 border border-white/10 focus:border-red-500 outline-none"
          required
        />
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="bg-white/5 rounded-lg p-2 border border-white/10 focus:border-red-500 outline-none"
          required
        />
        <input
          type="time"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          className="bg-white/5 rounded-lg p-2 border border-white/10 focus:border-red-500 outline-none"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition-colors"
      >
        Book Slot
      </button>
    </form>
  );
}