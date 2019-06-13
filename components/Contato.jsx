import React from 'react'

function Contato(props) {
    return (
<div id="contato" className="contato">
            <div className="container-titulo-contato">
              <p>Contatos</p>
              <p>Qualquer dúvida fale conosco</p>
            </div>
            <div className="container-contato-email">
                <button className="botao-contato-blue">
                    entre em contato
                </button>
              example@gmail.com
            </div>
            <div className="row-contato">--------------</div>
            <div className="container-titulo-contato">
              <p>Contatos</p>
              <p>Qualquer dúvida fale conosco</p>
            </div>
            <div className="container-social">
              <button>X</button>
              <button>X</button>
              <button>X</button>
            </div>
        </div>
    )
};

export default Contato;