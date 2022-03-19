const distance = (value, unit = 'mile', display = 'short') => {
  if (typeof value !== 'number' || Number.isNaN(value))
    throw new Error(
      `Invalid distance value: received '${value}' - expected number`
    )

  if (unit !== 'mile' && unit !== 'kilometer')
    throw new Error(
      `Invalid distance unit: received '${unit}' - expected 'mile' or 'kilometer'`
    )

  if (display !== 'short' && display !== 'long' && display !== 'narrow')
    throw new Error(
      `Invalid distance unit display: received '${display}' - expected 'short', 'long', or 'narrow'`
    )

  const format = Intl.NumberFormat('en-US', {
    style: 'unit',
    unit,
    unitDisplay: display
  })

  return format.format(value)
}

export default distance
