import { Table } from 'react-bootstrap'

import data from '../data/table1.json'

const NUMBER_FORMAT = Intl.NumberFormat('en-US', {
  style: 'unit',
  unit: 'mile',
  unitDisplay: 'short'
})

const formatNumber = value => NUMBER_FORMAT.format(value)

const MINS_IN_HOUR = 60

const formatHours = hours => {
  if (Number.isNaN(hours)) return ''

  const minutes = hours * MINS_IN_HOUR

  const wholeHours = Math.floor(minutes / MINS_IN_HOUR)

  if (wholeHours) {
    if (wholeHours === 1) {
      return `${wholeHours} hr`
    }

    return `${wholeHours} hrs`
  }

  return ''
}

const formatMinutes = hours => {
  if (Number.isNaN(hours)) return ''

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

const Table1 = () => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Customer</th>
        <th>Unit #</th>
        <th>VIN</th>
        <th>Distance</th>
        <th>Duration</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, idx) => (
        <tr key={idx}>
          <td>{row.customer}</td>
          <td className='fixed-width'>{row.unitNumber}</td>
          <td className='fixed-width'>{row.vin}</td>
          <td className='distance'>{formatNumber(row.miles)}</td>
          <td className='duration'>
            <span>{formatHours(row.hours)}</span>
            <span>{formatMinutes(row.hours)}</span>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export default Table1
