import React, {useState} from 'react'
import App from './App'
import FuncApp from './Functional Components/FuncApp'
import {AppBody, HoverButton} from './styles'

const ToggleApp = () => {
  const [toggle, setToggle] = useState(false)
  const [toggle1, setToggle1] = useState(false)
  return (
    <AppBody>
    <div style={{textAlign: 'Center'}}>
      <HoverButton onClick={()=>setToggle(!toggle)}>Mount/Unmount Class Component</HoverButton>
      <HoverButton onClick={()=>setToggle1(!toggle1)}>Mount/Unmount Functional Component</HoverButton>
      {toggle && <App />}
      {toggle1 && <FuncApp />}
    </div>
    </AppBody>
  )
}

export default ToggleApp