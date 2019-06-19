import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

import './estilo.css'

class Header extends React.Component {

  constructor(props) {
    super(props)
  this.state = {
      menuEnable: 'hidden'
    }

    this.handleMenu =  this.handleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);

  }

  handleMenu = () => {
    if(this.state.menuEnable === 'hidden') {
      this.setState({
        menuEnable: 'show'
      })
    } else {
      this.setState({
        menuEnable: 'hidden'
      })
    }
  }

  closeMenu = () => {
    this.setState({
      menuEnable: 'hidden'
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="logo-header">
            OMAPE
              </div>
          <div onClick={this.handleMenu} className="menu-header-hamburger">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="menu-header">
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#equipe">Equipe</a></li>
              <li><a href="#contato">Contato</a></li>
              <li><a href="#inicio">Cartaz</a></li>
              <li><Link href="/login"><a>Efetuar login</a></Link></li>
            </ul>
          </div>
        </div>
        <div className={"menu-hamburger " + this.state.menuEnable}>
          <ul>
            <li onClick={this.closeMenu}><a href="#inicio">Inicio</a></li>
            <li onClick={this.closeMenu}><a href="#sobre">Sobre</a></li>
            <li onClick={this.closeMenu}><a href="#equipe">Equipe</a></li>
            <li onClick={this.closeMenu}><a href="#contato">Contato</a></li>
            <li onClick={this.closeMenu}><a href="#inicio">Cartaz</a></li>
            <Link href="/login"><li onClick={this.closeMenu}><a>Efetuar login</a></li></Link>
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default Header;