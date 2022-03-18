import './App.css'
import { Table } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '3%' }}>SBJ Services LLC PM Inspection Checklist</h1>
      <h2 style={{ marginTop: '1%', marginLeft: '31%' }}>Work Order #</h2>
      <div style={{ marginTop: '1%', marginLeft: '10%', marginRight: '10%' }}>
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
    </div >
  );
}

export default App;
