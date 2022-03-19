import { Table } from 'react-bootstrap'

import tasks from '../data/table2.json'

const Table2 = () => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Task</th>
        <th>Completed</th>
        <th>Not Performed</th>
        <th>Part #</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task, idx) => (
        <tr key={idx}>
          <td>{task.name}</td>
          <td>
            <input
              type='checkbox'
              checked={task.completed}
              onChange={() => {}}
              data-testid='table-2-completed'
            />
          </td>
          <td>
            <input
              type='checkbox'
              checked={task.notPerformed}
              onChange={() => {}}
              data-testid='table-2-not-performed'
            />
          </td>
          <td className='fixed-width'>{task.partNumber}</td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export default Table2
