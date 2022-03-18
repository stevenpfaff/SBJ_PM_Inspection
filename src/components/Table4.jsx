import { Table } from 'react-bootstrap'

import tasks from '../data/table4.json'

const Table4 = () => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Task</th>
        <th>OK</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task, idx) => (
        <tr key={idx}>
          <td>{task.name}</td>
          <td>
            <input type='checkbox' />
          </td>
          <td></td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export default Table4
