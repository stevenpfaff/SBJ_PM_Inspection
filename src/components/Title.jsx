import logo from '../assets/sbj.png'

const Title = ({ workOrderNumber = '' }) => (
  <>
    <h1>
      <img id='logo' src={logo} />
      PM Inspection Checklist
    </h1>
    <h2>Work Order #{workOrderNumber}</h2>
  </>
)

export default Title
