export const milisecondToMinTrack = (duration: number): string => {
  const date = new Date(duration);

  return date.getMinutes() + ':' + date.getSeconds();
};

export const milisecondToMinEpisode = (duration: number): string => {
  const date = new Date(duration);

  return date.getMinutes() + ' min ' + date.getSeconds() + 's';
};
