import React from 'react'

import './estilo.css'

function Pessoa(props) {
    return (
        <div className="pessoa">
            <div className="foto">
                <img src="/static/profile.jpg" />
            </div>
            <div className="nome">
                {props.nome}
                </div>
            <div className="funcao">
                {props.funcao}
                </div>
            <a href={"mailto:"+props.email}>
                <button className="botao-contato">
                    entre em contato
                </button>
            </a>
        </div>
    )
}

export default Pessoa;