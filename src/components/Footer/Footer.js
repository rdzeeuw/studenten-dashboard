import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className="footer"> 
        © {new Date().getFullYear()} - Robin de Zeeuw
    </div>
  )
}

export default Footer