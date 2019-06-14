import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

import './estilo.css'

function Header(props) {
  return (
    <React.Fragment>
      <div className="header">
        <div className="logo-header">
          OMAPE
            </div>
        <div className="menu-header-hamburger">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="menu-header">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#equipe">Equipe</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href="#inicio">Cartaz</a></li>
            <li><Link href="/admin"><a>Efetuar login</a></Link></li>
          </ul>
        </div>
      </div>
      <div className="menu-hamburger">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#equipe">Equipe</a></li>
          <li><a href="#contato">Contato</a></li>
          <li><a href="#inicio">Cartaz</a></li>
          <li><Link href="/admin"><a>Efetuar login</a></Link></li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Header;