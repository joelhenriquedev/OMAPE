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
      sobre: '',
      titulo: '',
      subTitulo: '',
      curtaDescricao: '',
      edital: null,
      pessoas: [],
      email: '',
      facebook: '',
      instagram: ''
    };
  }

  componentWillMount() {
    const database = firebase.firestore();
    const paginaInicio = database.collection('paginaInicio').doc('e7f6P3zK64C4OV3u8sZm');
    const paginaSobre = database.collection('paginaSobre').doc('dZsgTkAuFlfWqBUzFkWW')
    const paginaContato = database.collection('paginaContato').doc('0HgLksK6xzDB6p140ADY')

    paginaInicio.get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          this.setState({
            titulo: doc.data().titulo,
            subTitulo: doc.data().subTitulo,
            curtaDescricao: doc.data().curtaDescricao
          })
        }
      })
      .catch(err => {
        console.log(err)
      })

    paginaSobre.get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          this.setState({
            sobre: doc.data().sobre
          })
        }
      })
      .catch(err =>
        console.log(err)
      )


    var citiesRef = database.collection('equipe');
    var query = citiesRef.get()
      .then(snapshot => {

        let listaPessoas = []

        snapshot.forEach(doc => {
          listaPessoas.push({
            "id": doc.id,
            "nome": doc.data().nome,
            "funcao": doc.data().funcao,
            "email": doc.data().email
          })
        });

        this.setState({
          pessoas: listaPessoas
        })
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });


    paginaContato.get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          this.setState({
            email: doc.data().email,
            facebook: doc.data().facebook,
            instagram: doc.data().instagram
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
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
          email={this.state.email}
        />
      </React.Fragment>
    );
  }
}






export default Index;