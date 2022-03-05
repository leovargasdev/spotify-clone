const SECOND_IN_MINUTES = 1000 * 60

export const convertMillisecondsToMinutes = (milliseconds: number): string => {
  const minutes = Math.floor(milliseconds / SECOND_IN_MINUTES)
  const seconds = Math.floor((milliseconds % SECOND_IN_MINUTES) / 1000)
    .toString()
    .padStart(2, '0')

  return `${minutes}:${seconds}`
}
