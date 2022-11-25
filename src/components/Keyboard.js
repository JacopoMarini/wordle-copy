import React from 'react'

function Keyboard() {
  // L'obiettivo è creare una taastiera fatta da 3 righe come quella del pc
  const keysFirstRow = ["Q", "W", " E", "R", "T", "Y", "U", " I", "O", "P"];
  const keysSecondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keysThirdRow = ["Z", "X", "C", "V", "B", "N", "M"];
  
  return <div className='keyboard'>
    <div className='first-line'>
      {keysFirstRow.map(key =>{
        return <Key />
      })}
    </div>
    <div className='second-line'>
    {keysSecondRow.map(key =>{
        return <Key />
      })}
    </div>
    <div className='third-line'>
    {keysThirdRow.map(key =>{
        return <Key />
      })}
    </div>
  </div>
}

export default Keyboard