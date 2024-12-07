import { useState, useEffect } from 'react';
import { getTimeUntilChristmas } from '../utils/dateUtils';

export function useTimeUntilChristmas() {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilChristmas());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilChristmas());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}