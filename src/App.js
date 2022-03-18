import './App.css'
import tasks from './Data/tasks.json'
import tasksii from './Data/tasksii.json'
import tasksiii from './Data/tasksiii.json'
import { Table } from 'react-bootstrap'
import logo from './sbj.png'

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '3%' }}><img src={logo} height="100" width="100"></img>PM Inspection Checklist</h1>
      <h2 style={{ marginTop: '1%', marginLeft: '31%' }}>Work Order #</h2>
      <div style={{ marginTop: '1%', marginLeft: '20%', marginRight: '20%' }}>
        <Table striped bordered hover>
          <thead>
            <th>Customer</th>
            <th>Unit #</th>
            <th>VIN</th>
            <th>Miles</th>
            <th>Hours</th>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div style={{ marginTop: '3%', marginLeft: '20%', marginRight: '20%' }}>
        <Table striped bordered hover>
          <thead>
            <th>Task</th>
            <th>Completed</th>
            <th>Not Performed</th>
            <th>Part #</th>
          </thead>
          {tasks.map((task) => (
            <tbody>
              <tr>
                <td>{task.name}</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
      <div style={{ marginTop: '3%', marginLeft: '20%', marginRight: '20%' }} >
        <Table striped bordered hover>
          <thead>
            <th>Task</th>
            <th>OK</th>
            <th>Adjusted</th>
            <th>Replace</th>
            <th>Monitor</th>
            <th>Not Performed</th>
          </thead>
          {tasksii.map((tasks) => (
            <tbody>
              <td>{tasks.name}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tbody>
          ))}
        </Table>
      </div>
      <div style={{ marginTop: '3%', marginLeft: '20%', marginRight: '20%' }} >
        <Table striped bordered hover>
          <thead>
            <th>Task</th>
            <th>OK</th>
            <th>Location</th>
          </thead>
          {tasksiii.map((tasksiii) => (
            <tbody>
              <td>{tasksiii.name}</td>
              <td></td>
              <td></td>
            </tbody>
          ))}
        </Table>
      </div>
    </div >
  );
}

export default App;
