export function CountDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const min = minutes % 60;
  return `${hours}ч ${min < 10 ? '0' : ''}${min}м`;
}

