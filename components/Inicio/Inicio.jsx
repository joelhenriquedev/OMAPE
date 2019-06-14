import React from 'react'
import './estilo.css'

function Inicio({ titulo, subTitulo, curtaDescricao, edital }) {
    return (
      <section id="inicio" className="inicio">
        <article className="container-inicio">
          <header className="container-inicio-introducao">
            <p>{titulo.toLocaleUpperCase()}</p>
            <p>{subTitulo}</p>
          </header>
          <p>{curtaDescricao}</p>
          <button>baixe o edital</button>
        </article>
      </section>
    )
}

export default Inicio;