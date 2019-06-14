import React from 'react'
import './estilo.css'

function Sobre(props) {
    return (
        <section id="sobre" className="sobre">
            <div className="container-sobre">
              <div className="logo-sobre">
                <img src="/static/logo.png" />
              </div>
              <div className="informacao-sobre">
                {props.bio}
              </div>
            </div>
        </section>
    )
}

export default Sobre;