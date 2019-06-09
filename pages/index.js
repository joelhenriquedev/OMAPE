import React from 'react'
import firebase from "../lib/firebase";
import '../estilo.css'

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      sobre: "",
      rfps: {} 
    };
  }

  componentDidMount() {

    const database = firebase.database();
    const developers = database.ref("sobre");

    developers.on("value", snapshot => {
      const rfps = snapshot.val();
      console.log(rfps);

      this.setState({
        sobre: rfps
      })
    })


  }

  render() {
    //const { loading, rfps } = this.state;
    //const rfpKeys = Object.keys(rfps);
    return (
      <React.Fragment>
        <div className="header">
            <div className="logo-header">
              OMAPE
            </div>
            <div className="menu-header">
              <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#equipe">Equipe</a></li>
                <li><a href="#contato">Contato</a></li>
                <li><a href="#">Efetuar login</a></li>
              </ul>
            </div>
        </div>
        <div id="inicio" className="inicio">
        <div className="container-inicio">
          <div className="container-inicio-introducao">
            <p>SEJA BEM VINDO À OMAPE 2019</p>
            <p>Olimpiada de matematica do agreste de pernambuco</p>
          </div>
          <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
          <button>baixe o edital</button>
          </div>
        </div>
        <div id="sobre" className="sobre">
            <div className="container-sobre">
              <div className="logo-sobre">

              </div>
              <div className="informacao-sobre">
                {this.state.sobre}
              </div>
            </div>
            
        </div>
        <div id="equipe" className="equipe">
            <div className="pessoa">
                <div className="foto">

                </div>
                <div className="nome">
                    Lorem ipsum dolor
                </div>
                <div className="funcao">
                    Professor
                </div>
                <div className="botao-contato">
                    entre em contato
                </div>
            </div>
            <div className="pessoa">
                <div className="foto">

                </div>
                <div className="nome">
                    Lorem ipsum dolor
                </div>
                <div className="funcao">
                    Professor
                </div>
                <div className="botao-contato">
                    entre em contato
                </div>
            </div>
            <div className="pessoa">
                <div className="foto">

                </div>
                <div className="nome">
                    Lorem ipsum dolor
                </div>
                <div className="funcao">
                    Professor
                </div>
                <div className="botao-contato">
                    entre em contato
                </div>
            </div>
            <div className="pessoa">
                <div className="foto">

                </div>
                <div className="nome">
                    Lorem ipsum dolor
                </div>
                <div className="funcao">
                    Professor
                </div>
                <div className="botao-contato">
                    entre em contato
                </div>
            </div>
        </div>
        <div id="contato" className="contato">
            Contato
        </div>
      </React.Fragment>
    );
  }
}






export default Index;