import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css"
function Navbar() {

  const [liens , setLiens] = useState([
    { lien: " " , nom:"Accueil" },
    { lien: "/realisation" , nom:"Réalisation" },
    { lien: "/contact" , nom:"Contact" },
  ])

  return (
    <>
    <nav>
      <NavLink to={" "} className="logo">
        <img src="/assets/Logo.png" alt="" />
      </NavLink>
      <input type="checkbox" id="hamburger-input" className='burger-shower'/>
      <label id="hamburger-menu" htmlFor="hamburger-input">
          <div className="sidebar-menu">

            <ul className='contenu_lien_burger'>
                {liens.map((url,index)=>(
                  <li className={"url "+index} key={"url_"+index}>
                    <NavLink to={url.lien}>
                      <p className='lien'>{url.nom}</p>
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>
      </label>
      <div className="main">
            <ul className='contenu_lien'>
                {liens.map((url,index)=>(
                  <li className={"url "+index} key={"url_"+index}>
                    <NavLink to={url.lien}>
                      <p className='lien'>{url.nom}</p>
                    </NavLink>
                  </li>
                ))}
            </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar