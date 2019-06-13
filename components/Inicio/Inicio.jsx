import React from 'react'
import './estilo.css'

function Inicio(props) {
    return (
      <section id="inicio" className="inicio">
        <article className="container-inicio">
          <header className="container-inicio-introducao">
            <p>SEJA BEM VINDO À OMAPE 2019</p>
            <p>Olimpiada de matematica do agreste de pernambuco</p>
          </header>
          <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
          <button>baixe o edital</button>
        </article>
      </section>
    )
}

export default Inicio;