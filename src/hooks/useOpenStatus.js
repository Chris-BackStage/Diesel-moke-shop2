import { useMemo } from 'react';
import { HOURS } from '../data/index.js';

function timeToMinutes(timeStr) {
  const [time, period] = timeStr.split(' ');
  let [h, m] = time.split(':').map(Number);
  if (period === 'PM' && h !== 12) h += 12;
  if (period === 'AM' && h === 12) h = 0;
  // Treat midnight close (0) as end-of-day (1440) so range logic works correctly
  if (h === 0 && period === 'AM' && timeStr !== '12:00 AM opening') return 1440;
  return h * 60 + m;
}

function closeTimeToMinutes(timeStr) {
  const [time, period] = timeStr.split(' ');
  let [h, m] = time.split(':').map(Number);
  if (period === 'PM' && h !== 12) h += 12;
  if (period === 'AM' && h === 12) return 1440; // midnight close = end of day
  return h * 60 + m;
}

export default function useOpenStatus() {
  return useMemo(() => {
    const now = new Date();
    const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const todayHours = HOURS.find(h => h.day === dayName);

    if (!todayHours) return { isOpen: false, label: 'Closed Today', closesSoon: false };

    const openMin = timeToMinutes(todayHours.open);
    const closeMin = closeTimeToMinutes(todayHours.close);
    const isOpen = currentMinutes >= openMin && currentMinutes < closeMin;
    const closesSoon = isOpen && (closeMin - currentMinutes) <= 60;
    const opensIn = !isOpen && currentMinutes < openMin;

    let label;
    if (isOpen && closesSoon) {
      const minsLeft = closeMin - currentMinutes;
      label = `Closes in ${minsLeft}m`;
    } else if (isOpen) {
      label = `Open · Closes ${todayHours.close}`;
    } else if (opensIn) {
      label = `Opens ${todayHours.open}`;
    } else {
      label = 'Closed Today';
    }

    return { isOpen, label, closesSoon };
  }, []);
}
