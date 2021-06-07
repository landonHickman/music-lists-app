import React, {useState} from 'react'
import App from './App'

const ToggleApp = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div style={{textAlign: 'Center'}}>
      <h1 onClick={()=>setToggle(!toggle)}>Unmount/Mount</h1>
      {toggle && <App />}
    </div>
  )
}
export default ToggleApp