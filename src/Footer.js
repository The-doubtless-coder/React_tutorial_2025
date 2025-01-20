import React from 'react'

import { useState } from 'react';

const Footer = () => {

  const [items, setItems] = useState([
    {
      id: 1, 
      checked: false,
      Name: "Item 1"
    },
    {
      id: 2, 
      checked: false,
      Name: "Item 1"
    },
    {
      id: 3, 
      checked: false,
      Name: "Item 2"
    },
    {
      id: 4, 
      checked: false,
      Name: "Item 3"
    },
    {
      id: 5, 
      checked: false,
      Name: "Item 4"
    },
    {
      id: 6, 
      checked: false,
      Name: "Item 5"
    },
    {
      id: 7, 
      checked: false,
      Name: "Item 6"
    }
  ]);

  const today = new Date();
  return (
    <div>Copyright &copy; {today.getFullYear()}
{/*     
    <ul>
      {items.map((item)=> {

        return <li className='item'>
          <input type='checkbox'
          checked={item.checked}
          >
          </input>
          <label>
            {item.Name}
          </label>
        </li>
      })}
    </ul> */}
    </div>
  )
}

export default Footer