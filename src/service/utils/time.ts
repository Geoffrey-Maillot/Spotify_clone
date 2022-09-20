export const milisecondToMinOrHour = (
  duration?: number
): string | undefined => {
  if (!duration) return;

  const totalSeconds = Math.floor(duration / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const days = Math.floor(totalHours / 24);

  const seconds = totalSeconds % 60;
  const minutes = totalMinutes % 60;
  const hours = totalHours % 24;

  let time = '1s';
  if (days > 0) {
    time = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else if (hours > 0) {
    time = `${hours}h ${minutes}m ${seconds}s`;
  } else if (minutes > 0) {
    time = `${minutes}m ${seconds}s`;
  } else if (seconds > 0) {
    time = `${seconds}s`;
  }
  return time;
};
