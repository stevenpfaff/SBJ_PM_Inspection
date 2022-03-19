const MINS_IN_HOUR = 60

const formatHours = hours => {
  if (typeof hours !== 'number' || Number.isNaN(hours))
    throw new Error(
      `Invalid hours value: received '${hours}' - expected number`
    )

  const wholeHours = Math.floor(hours)

  if (wholeHours === 1) {
    return `${wholeHours} hr`
  }

  return `${wholeHours} hrs`
}

const formatMinutes = hours => {
  if (typeof hours !== 'number' || Number.isNaN(hours))
    throw new Error(
      `Invalid hours value: received '${hours}' - expected number`
    )

  const minutes = hours * MINS_IN_HOUR

  const wholeMinutes = Math.floor(minutes % MINS_IN_HOUR)

  if (wholeMinutes) {
    if (wholeMinutes === 1) {
      return `${wholeMinutes} min`
    }

    return `${wholeMinutes} mins`
  }

  return ''
}

const duration = {
  formatHours,
  formatMinutes
}

export default duration
