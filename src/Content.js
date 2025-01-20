import React, { use } from 'react'
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function Content() {

    const [name, setName] = useState("JONES")
    const [items, setItems] = useState([
      {
        id: 1, 
        checked: true,
        Name: "Item 1"
      },
      {
        id: 2, 
        checked: false,
        Name: "Indigo Item"
      },
      {
        id: 3, 
        checked: true,
        Name: "Item 2"
      },
      {
        id: 4, 
        checked: false,
        Name: "Item 3"
      },
      {
        id: 5, 
        checked: true,
        Name: "Item 4"
      },
      {
        id: 6, 
        checked: false,
        Name: "Item 5"
      },
      {
        id: 7, 
        checked: true,
        Name: "Item 6"
      }
    ]);

    const handleNames = ()=>{
        const names = ["IAN", "KEN", "MARTIN", "MERLYNE", "SHARON", "KIBET", "JESICCA", "JOHNSON", "KIMBERLY", "RUPERT"];
        const randomInt = Math.floor(Math.random()*10);
         setName(names[randomInt]);
      }

      const handleClick = ()=>{
        console.log("you clicked me, thanks!")
      }

  return (
    <div className='main'>
      <p>Hello {name}!</p>
      <ul>
        {items.map((item)=>{
          return <li className='item' key={item.id}>
            <input type='checkbox'
            checked={item.checked}/>
            <label>
            {item.Name}
            </label>
            <FaTrashAlt role='button' tabIndex="0"/>          
            </li>
        })}
      </ul>
      <button onClick={handleNames}>Click Me</button>
    </div>
  )
}

export default Content
