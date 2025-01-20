import React from 'react'

function Content() {
    const handleNames = ()=>{
        const names = ["IAN", "KEN", "MARTIN", "JOHNSON", "KIMBERLY", "RUPERT"];
        const randomInt = Math.floor(Math.random()*3);
        return names[randomInt];
      }

  return (
    <div>
      <p>Hello {handleNames()}!</p>
    </div>
  )
}

export default Content
