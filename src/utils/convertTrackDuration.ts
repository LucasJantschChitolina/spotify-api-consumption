export function convertTrackDuration(duration_ms: number): string {
  const minutes = Math.floor(duration_ms / 60000);
  const seconds = ((duration_ms % 60000) / 1000).toFixed(0);

  const formattedSeconds = seconds.length === 1 ? `0${seconds}` : seconds;
  const formattedDuration = `${minutes}:${formattedSeconds}`;

  return formattedDuration;
}
