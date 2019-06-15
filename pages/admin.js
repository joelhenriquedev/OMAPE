
import React from 'react'
import firebase from "../lib/firebase";
import '../estilo.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit, faTrash, faUserPlus, faWindowClose, faClosedCaptioning, faSave } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

class Admin extends React.Component {

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
            instagram: '',
            isPoupupActive: 'showPoupup',
            pessoaPoupup: [{
                'id': '',
                'nome': '',
                'funcao': '',
                'email': ''
            }]
        };

        this.handleTitulo = this.handleTitulo.bind(this)
        this.handleSubTitulo = this.handleSubTitulo.bind(this)
        this.handleCurtaDescricao = this.handleCurtaDescricao.bind(this)
        this.salvarPaginaInicio = this.salvarPaginaInicio.bind(this);
        this.salvarPaginaContato = this.salvarPaginaContato.bind(this)
        this.salvarPaginaSobre = this.salvarPaginaSobre.bind(this)
        this.handleSobre = this.handleSobre.bind(this);
        this.handleEmailContato = this.handleEmailContato.bind(this)
        this.handleFacebook = this.handleFacebook.bind(this)
        this.handleInstagram = this.handleInstagram.bind(this)
        this.handleClosePoupup = this.handleClosePoupup.bind(this)
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

    salvarPaginaInicio(evt) {
        evt.preventDefault();
        const database = firebase.firestore();
        const paginaInicio = database.collection('paginaInicio').doc('e7f6P3zK64C4OV3u8sZm');

        paginaInicio.update({
            titulo: this.state.titulo,
            subTitulo: this.state.subTitulo,
            curtaDescricao: this.state.curtaDescricao,
        });
        console.log('salvando titulo')
    }

    salvarPaginaSobre(evt) {
        evt.preventDefault();
        const database = firebase.firestore();
        const paginaInicio = database.collection('paginaSobre').doc('dZsgTkAuFlfWqBUzFkWW');

        paginaInicio.update({
            sobre: this.state.sobre
        });
        console.log('salvando sobre')
    }

    salvarPaginaContato(evt) {
        evt.preventDefault();
        const database = firebase.firestore();
        const paginaInicio = database.collection('paginaContato').doc('0HgLksK6xzDB6p140ADY');

        paginaInicio.update({
            email: this.state.email,
            facebook: this.state.facebook,
            instagram: this.state.instagram
        });
        console.log('salvando contato')
    }

    handleTitulo(evt) {
        evt.preventDefault();
        this.setState({
            titulo: evt.target.value
        })
    }

    handleSubTitulo(evt) {
        evt.preventDefault();
        this.setState({
            subTitulo: evt.target.value
        })
    }

    handleCurtaDescricao(evt) {
        evt.preventDefault();
        this.setState({
            curtaDescricao: evt.target.value
        })
    }

    handleSobre(evt) {
        evt.preventDefault();
        this.setState({
            sobre: evt.target.value
        })
    }

    handleEmailContato(evt) {
        evt.preventDefault();
        this.setState({
            email: evt.target.value
        })
    }

    handleFacebook(evt) {
        evt.preventDefault();
        this.setState({
            facebook: evt.target.value
        })
    }

    handleInstagram(evt) {
        evt.preventDefault();
        this.setState({
            instagram: evt.target.value
        })
    }

    handleClosePoupup(evt) {
        evt.preventDefault();
        this.setState({
            isPoupupActive: (this.state.isPoupupActive === 'showPoupup') ? 'hiddenPoupup' : 'showPoupup'
        })
    }

    render() {

        let liPessoas = this.state.pessoas.map(pes => (
            <li key={pes.id}>
                <div>
                    {pes.nome}
                </div>
                <div>
                    <FontAwesomeIcon icon={faUserEdit} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faClosedCaptioning} />
                </div>
            </li>
        ))

        return (
            <div className="container-admin">
                <div className={"poupup-add-equipe " + this.state.isPoupupActive}>
                    <div>
                        <div className="titulo-admin">Adicione uma pessoa</div>
                        <div>
                            <div>
                                <label htmlFor="" className="label-card-admin">Nome</label>
                                <input type="text" value="{this.state.titulo}" />
                            </div>
                            <div>
                                <label className="label-card-admin">Função</label>
                                <input type="text" value="{this.state.subTitulo}" />
                            </div>
                            <div>
                                <label className="label-card-admin">E-mail</label>
                                <input type="text"  value="{this.state.curtaDescricao}" />
                            </div>
                        </div>
                        <div>
                            <div>
                            <FontAwesomeIcon icon={faSave} />
                            </div>
                            <div onClick={this.handleClosePoupup}>
                                <FontAwesomeIcon icon={faWindowClose} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-card-admin">
                    <div className="titulo-admin">Inicial</div>
                    <label htmlFor="" className="label-card-admin">Título</label>
                    <textarea onChange={this.handleTitulo} value={this.state.titulo} />
                    <label className="label-card-admin">Sub-título</label>
                    <textarea onChange={this.handleSubTitulo} value={this.state.subTitulo} />
                    <label className="label-card-admin">Breve descrição</label>
                    <textarea style={{ height: 70 + 'px' }} onChange={this.handleCurtaDescricao} value={this.state.curtaDescricao} />
                    <button onClick={this.salvarPaginaInicio}>salvar</button>
                </div>

                <div className="container-card-admin">
                    <div className="titulo-admin">Sobre</div>
                    <label className="label-card-admin">Sobre a omape</label>
                    <textarea style={{ height: 200 + 'px' }} onChange={this.handleSobre} value={this.state.sobre} />
                    <button onClick={this.salvarTitulo}>salvar</button>
                </div>
                <div className="container-card-admin">
                    <div className="titulo-admin">Edital</div>
                </div>
                <div className="container-card-admin">
                    <div className="titulo-admin">Equipe</div>
                    <ul className="table-equipe">
                        {liPessoas}
                    </ul>
                    <button className="btn-add-equipe">
                        <FontAwesomeIcon icon={faUserPlus} />
                    </button>
                </div>
                <div className="container-card-admin">
                    <div className="titulo-admin">Contato</div>
                    <label className="label-card-admin">E-mail para contatos</label>
                    <input type="text" onChange={this.handleEmailContato} value={this.state.email} />
                    <label className="label-card-admin">Link da pagina do Facebook</label>
                    <input type="text" onChange={this.handleFacebook} value={this.state.facebook} />
                    <label className="label-card-admin">Link da página do Instagram</label>
                    <input type="text" onChange={this.handleInstagram} value={this.state.instagram} />
                    <button onClick={this.salvarPaginaContato}>salvar</button>
                </div>
            </div>
        );
    }
}

export default Admin;
