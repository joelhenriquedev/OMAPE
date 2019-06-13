import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Header(props) {
    return (
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
                <li><a href="#">Cartaz</a></li>
                <li><a href="#">Efetuar login</a></li>
              </ul>
            </div>
        </div>
    )
}

export default Header;