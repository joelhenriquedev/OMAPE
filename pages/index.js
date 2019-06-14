import React from 'react'
import firebase from "../lib/firebase";
import '../estilo.css'
import Header from '../components/Header/Header'
import Inicio from '../components/Inicio/Inicio'
import Sobre from '../components/Sobre/Sobre'
import Equipe from '../components/Equipe/Equipe'
import Contato from '../components/Contato/Contato'

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      sobre: `A Olimpíada Pernambucana de Matemática (OPEMAT) é uma atividade de extensão realizada pelo Departamento de Matemática da Universidade Federal Rural de Pernambuco (UFRPE) em conjunto com as seguintes IES do estado: Universidade Federal de Pernambuco (UFPE), Universidade de Pernambuco (UPE) e Instituto Federal do Sertão de Pernambuco (IF SERTÃO-PE). Trata-se de uma competição para estudantes do 6º ao 9º ano do ensino fundamental e de todas as séries do ensino médio das escolas públicas e particulares de Pernambuco que consiste de uma prova realizada em polos definidos pela coordenação em uma única fase.
              A OPEMAT foi realizada pela primeira vez em em 2015 e teve 150 participantes das cidades de Recife e Caruaru. Em 2018, na sua 4a edição contou com 1.380 estudantes provenientes de 168 escolas de 8 polos espalhados por Pernambuco.
            Este ano, a competição será realizada em 10 polos: Cabo de Santo Agostinho, Caruaru, Garanhuns, Igarassu, Nazaré da Mata, Ouricuri, Pesqueira, Petrolina, Recife e Serra Talhada. A prova ocorrerá no dia 19 de outubro de 2019 às 13h com duração de 4 horas e será composta por cinco questões sendo essas de dois tipos: proposições múltiplas e discursivas.`,
      titulo: 'seja bem vindo à omape 2019',
      subTitulo: 'Olimpiada de matematica do agreste de pernambuco',
      curtaDescricao: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
      edital: null,
      pessoas: [
        {
          "id": 0,
          "nome": "Lorem ipsum",
          "funcao": "Professor",
          "email": "joelhenrique2000@gmail.com"
        },
        {
          "id": 1,
          "nome": "Lorem ipsum",
          "funcao": "Professor",
          "email": "joelhenrique2000@gmail.com"
        },
        {
          "id": 2,
          "nome": "Lorem ipsum",
          "funcao": "Professor",
          "email": "joelhenrique2000@gmail.com"
        },
        {
          "id": 3,
          "nome": "Lorem ipsum",
          "funcao": "Professor",
          "email": "joelhenrique2000@gmail.com"
        },
        {
          "id": 4,
          "nome": "Lorem ipsum",
          "funcao": "Professor",
          "email": "joelhenrique2000@gmail.com"
        },
        {
          "id": 5,
          "nome": "Lorem ipsum",
          "funcao": "Professor",
          "email": "joelhenrique2000@gmail.com"
        },
        {
          "id": 6,
          "nome": "Lorem ipsum",
          "funcao": "Professor",
          "email": "joelhenrique2000@gmail.com"
        },
        {
          "id": 7,
          "nome": "Lorem ipsum",
          "funcao": "Professor",
          "email": "joelhenrique2000@gmail.com"
        },
        {
          "id": 8,
          "nome": "Lorem ipsum",
          "funcao": "Professor",
          "email": "joelhenrique2000@gmail.com"
        },
        {
          "id": 9,
          "nome": "Lorem ipsum",
          "funcao": "Professor",
          "email": "joelhenrique2000@gmail.com"
        },
        {
          "id": 10,
          "nome": "Lorem ipsum",
          "funcao": "Professor",
          "email": "joelhenrique2000@gmail.com"
        }
      ],
      emailContato: 'joelhenrique2000@gmail.com'
    };
      
    }

  componentDidMount() {
/**
    const database = firebase.database();
    const developers = database.ref("sobre");

    developers.on("value", snapshot => {
      const rfps = snapshot.val();
      console.log(rfps);

      this.setState({
        sobre: rfps
      })
    })
 */

  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Inicio 
          titulo={this.state.titulo}
          subTitulo={this.state.subTitulo}
          curtaDescricao={this.state.curtaDescricao}
          edital={this.state.edital}
        />
        <Sobre
          bio={this.state.sobre}
        />
        <Equipe 
          pessoas={this.state.pessoas}
        />
        <Contato
          email={this.state.emailContato}
        />
      </React.Fragment>
    );
  }
}






export default Index;