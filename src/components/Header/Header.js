import React from 'react';
import './header.css'
import { SiHtmlacademy as Academy } from "react-icons/si";

function Header() {
  return (
    <header className="header">
      <Academy size="60"/>
      <h1 className="header-title">Wincademy </h1>
      <h3>Student Dashboard</h3>
    </header>
  )
}

export default Header;
