import React from 'react';
import v from './images/v.png';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return (
<div>
<ul>
      <li className="logo"><img src={v} alt=""/></li>
      <a href='https://drive.google.com/file/d/1xx9hKS9ZnxQRnB9m_JTgwmeClnvBpLDg/view?usp=share_link' target='_blank'  rel="noopener noreferrer">
      <button><strong>Resume</strong></button></a>
      <li><Link to="/Contact">Contact</Link></li>
      <li><Link to="/Projects">Projects</Link></li>
      <li><Link to='/About'>About</Link></li>
      <li><a className="active" href="/">Home</a></li>
  </ul>
  
</div>
    )
}

export default Navbar;