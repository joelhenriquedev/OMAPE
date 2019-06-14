import React from 'react'
import './estilo.css'

import Pessoa from '../CardPessoa/Pessoa'

function Equipe({pessoas}) {

    let listPessoas = pessoas.map(el => {
        return (
            <Pessoa
                key={el.id}
                nome={el.nome}
                funcao={el.funcao}
                email={el.email}
            />
        )
    })

    return (
        <div id="equipe" className="equipe">
            <div className="titulo">
            <p>Quem faz parte</p>
            </div>
            {listPessoas}
        </div>
    )
}

export default Equipe;