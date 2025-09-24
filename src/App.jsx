import React, { useState } from 'react'

function useToggle(initialValue = false){
  const [value , setValue] = useState(initialValue);

  const toggle = () => setValue((prev) => !prev);

  return [value , toggle];
}

const App = () => {
  const [isOn, toggle] = useToggle(false);
  return (
    <div className='container'>
      <button onClick={toggle}>{isOn ? "ON" : "OFF"}</button>
    </div>
  )
}

export default App
