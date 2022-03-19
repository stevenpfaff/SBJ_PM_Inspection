import { Table } from 'react-bootstrap'

import data from '../data/table1.json'

import formatters from '../formatters'

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
          <td className='distance'>{formatters.distance(row.miles)}</td>
          <td className='duration'>
            <span>{formatters.duration.formatHours(row.hours)}</span>
            <span>{formatters.duration.formatMinutes(row.hours)}</span>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export default Table1
