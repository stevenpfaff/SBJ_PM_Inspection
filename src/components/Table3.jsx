import { Table } from 'react-bootstrap'

import tasks from '../data/table3.json'

const Table3 = () => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Task</th>
        <th>OK</th>
        <th>Adjusted</th>
        <th>Replace</th>
        <th>Monitor</th>
        <th>Not Performed</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task, idx) => (
        <tr key={idx}>
          <td>{task.name}</td>
          <td>
            <input type='checkbox' />
          </td>
          <td>
            <div>
              <input type='checkbox' />
            </div>
          </td>
          <td>
            <input type='checkbox' />
          </td>
          <td>
            <input type='checkbox' />
          </td>
          <td>
            <input type='checkbox' />
          </td>
          <td>

          </td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export default Table3
