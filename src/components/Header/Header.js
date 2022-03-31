import React from 'react';
import './header.css'
import { useNavigate } from 'react-router-dom'
import { SiHtmlacademy as Academy } from "react-icons/si";

function Header() {
  let navigate = useNavigate()

  return (
    <header className="header">
      <div className="logo">
        <Academy size="60" onClick={() => navigate('/')}/>
        <h1 className="header-title" onClick={() => navigate('/')}>Wincademy </h1>
        <h3>Student Dashboard</h3>
      </div> 
    </header>
  )
}

export default Header;
