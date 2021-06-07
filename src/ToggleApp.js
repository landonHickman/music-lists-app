import React, {useState} from 'react'
import { Button } from 'semantic-ui-react'
import App from './App'
import FuncApp from './Functional Components/FuncApp'

const ToggleApp = () => {
  const [toggle, setToggle] = useState(false)
  const [toggle1, setToggle1] = useState(false)
  return (
    <div style={{textAlign: 'Center', marginTop: '10px'}}>
      <Button basic color='violet'  onClick={()=>setToggle(!toggle)}>Mount/Unmount Class Component</Button>
      <Button basic color='violet'  onClick={()=>setToggle1(!toggle1)}>Mount/Unmount Functional Component</Button>
      {toggle && <App />}
      {toggle1 && <FuncApp />}
    </div>
  )
}
export default ToggleApp