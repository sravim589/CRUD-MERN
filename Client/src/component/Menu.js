import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Menu() {
  return (
    <div className='navbar'>
      <ul >
        <li><NavLink to='/' activeclassname='active'>Home</NavLink></li>
        <li><NavLink to="/profile" activeclassname='active'>CRUD</NavLink></li>
        <li><NavLink to='/form' activeclassname='active'>Form Validation</NavLink></li>
      </ul>

    </div>
  )
}
