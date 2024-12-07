import { useState, useEffect } from 'react';
import { ScheduleItem } from '../types/schedule';

export function useSchedule() {
  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>(() => {
    const saved = localStorage.getItem('scheduleItems');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('scheduleItems', JSON.stringify(scheduleItems));
  }, [scheduleItems]);

  const addScheduleItem = (item: ScheduleItem) => {
    setScheduleItems((prev) => [...prev, item].sort((a, b) => 
      new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
    ));
  };

  return { scheduleItems, addScheduleItem };
}