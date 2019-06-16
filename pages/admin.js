
import React from 'react'
import firebase from "../lib/firebase";
import '../estilo.css'

import FirebaseService from '../services/FirebaseService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit, faTrash, faUserPlus, faWindowClose, faClosedCaptioning, faSave } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

class CardSkeleton extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container-card-admin">
                <div className="titulo-admin">{this.props.titulo}</div>
                {this.props.children}
            </div>
        )
    }

}

class CardInicial extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            titulo: '',
            subTitulo: '',
            curtaDescricao: '',
        };

        this.save = this.save.bind(this)
        this.handleTitulo = this.handleTitulo.bind(this)
        this.handleSubTitulo = this.handleSubTitulo.bind(this)
        this.handleCurtaDescricao = this.handleCurtaDescricao.bind(this)
    }

    componentDidMount() {

        // Pegando os dados da seção Inicio
        FirebaseService.getDocData('paginaInicio', 'e7f6P3zK64C4OV3u8sZm', (dataReceived) => {
            this.setState({
                titulo: dataReceived.titulo,
                subTitulo: dataReceived.subTitulo,
                curtaDescricao: dataReceived.curtaDescricao
            })
        })
    }

    save(event) {
        event.preventDefault();

        FirebaseService.updateDoc('paginaInicio', 'e7f6P3zK64C4OV3u8sZm', {
            titulo: this.state.titulo,
            subTitulo: this.state.subTitulo,
            curtaDescricao: this.state.curtaDescricao,
        });
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

    render() {
        return (
            <CardSkeleton titulo="Inicio" >
                <label htmlFor="" className="label-card-admin">Título</label>
                <textarea onChange={this.handleTitulo} value={this.state.titulo} />
                <label className="label-card-admin">Sub-título</label>
                <textarea onChange={this.handleSubTitulo} value={this.state.subTitulo} />
                <label className="label-card-admin">Breve descrição</label>
                <textarea style={{ height: 70 + 'px' }} onChange={this.handleCurtaDescricao} value={this.state.curtaDescricao} />
                <button onClick={this.save}>salvar</button>
            </CardSkeleton>
        )
    }

}

class CardSobre extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            sobre: ''
        };

        this.salvarPaginaSobre = this.salvarPaginaSobre.bind(this)
        this.handleSobre = this.handleSobre.bind(this);
    }

    componentWillMount() {

        // Pegando os dados da seção Sobre
        FirebaseService.getDocData('paginaSobre', 'dZsgTkAuFlfWqBUzFkWW', (dataReceived) => {
            this.setState({
                sobre: dataReceived.sobre
            })
        })

    }
    handleSobre(evt) {
        evt.preventDefault();
        this.setState({
            sobre: evt.target.value
        })
    }

    salvarPaginaSobre(evt) {
        evt.preventDefault();

        FirebaseService.updateDoc('paginaSobre', 'dZsgTkAuFlfWqBUzFkWW', {
            sobre: this.state.sobre
        });
    }


    render() {
        return (
            <CardSkeleton titulo="Sobre" >
                <label className="label-card-admin">Sobre a omape</label>
                <textarea style={{ height: 200 + 'px' }} onChange={this.handleSobre} value={this.state.sobre} />
                <button onClick={this.salvarPaginaSobre}>salvar</button>
            </CardSkeleton>

        )
    }

}

class CardEdital extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h1>
                oi
            </h1>
        )
    }

}

class PopUpUpdateUser extends React.Component {

}

class PopUpAddUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pessoaPoupup: [{
                'id': '',
                'nome': '',
                'funcao': '',
                'email': ''
            }]
        };

        this.save = this.save.bind(this)
    }

    save(event) {
        event.preventDefault()
        console.log('oaaaaaaai')
        this.props.click(event)
    }

    render() {
        return( 
            <div className={"poupup-add-equipe " + this.props.active}>
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
                            <input type="text" value="{this.state.curtaDescricao}" />
                        </div>
                    </div>
                    <div>
                        <div onClick={this.save}>
                            <FontAwesomeIcon icon={faSave} />
                        </div>
                        <div onClick={this.props.click}>
                            <FontAwesomeIcon icon={faWindowClose} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class CardEquipe extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isPopUpAddUserEnable: false,
            isPopUpUpdateUserEnable: false,
            pessoas: [],
            isPoupupActive: 'hiddenPoupup',
            pessoaPoupup: [{ 
                'id': '',
                'nome': '', 
                'funcao': '',
                'email': ''
            }]
        };


        this.handleWindowPopUp = this.handleWindowPopUp.bind(this)
    }

    componentWillMount() {


        // Pegando os dados da seção Equipe
        FirebaseService.getCollectionData('equipe', (snapshot) => {
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

    }


    handleWindowPopUp(event) {
        event.preventDefault();
        console.log('oi')
        this.setState({
            isPoupupActive: (this.state.isPoupupActive === 'showPoupup') ? 'hiddenPoupup' : 'showPoupup'
        })
    }


    render() {
        let liPessoas = this.state.pessoas.map(pes => (
            <Li keyProps={pes.id} key={pes.id} nome={pes.nome} />
        ))

        return (
            <React.Fragment>
                <PopUpAddUser active={this.state.isPoupupActive} click={this.handleWindowPopUp} />
                <div className="container-card-admin">
                    <div className="titulo-admin">Equipe</div>
                    <ul className="table-equipe">
                        {liPessoas}
                    </ul>
                    <button onClick={this.handleWindowPopUp} className="btn-add-equipe">
                        <FontAwesomeIcon icon={faUserPlus} />
                    </button>
                </div>
            </React.Fragment>

        )
    }

}

class CardContato extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            facebook: '',
            instagram: ''
        }

        this.salvarPaginaContato = this.salvarPaginaContato.bind(this)

        this.handleEmailContato = this.handleEmailContato.bind(this)
        this.handleFacebook = this.handleFacebook.bind(this)
        this.handleInstagram = this.handleInstagram.bind(this)
    }

    componentWillMount() {

        // Pegando os dados da seção Contato
        FirebaseService.getDocData('paginaContato', '0HgLksK6xzDB6p140ADY', (dataReceived) => {
            this.setState({
                email: dataReceived.email,
                facebook: dataReceived.facebook,
                instagram: dataReceived.instagram
            })
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

    salvarPaginaContato(evt) {
        evt.preventDefault();

        FirebaseService.updateDoc('paginaContato', '0HgLksK6xzDB6p140ADY', {
            email: this.state.email,
            facebook: this.state.facebook,
            instagram: this.state.instagram
        });
    }


    render() {
        return (
            <CardSkeleton titulo="Contato" >
                <label className="label-card-admin">E-mail para contatos</label>
                <input type="text" onChange={this.handleEmailContato} value={this.state.email} />
                <label className="label-card-admin">Link da pagina do Facebook</label>
                <input type="text" onChange={this.handleFacebook} value={this.state.facebook} />
                <label className="label-card-admin">Link da página do Instagram</label>
                <input type="text" onChange={this.handleInstagram} value={this.state.instagram} />
                <button onClick={this.salvarPaginaContato}>salvar</button>
            </CardSkeleton>

        )
    }

}

class Li extends React.Component {

    constructor(props) {
        super(props)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleUpdate(event) {
        event.preventDefault();
        console.log('atualizando o ', this.props.nome, ' com id ', this.props.keyProps)
    }

    handleDelete(event) {
        event.preventDefault();
        console.log('deletando o ', this.props.nome, ' com id ', this.props.keyProps)
    }

    render() {
        return (
            <li key={this.props.keyProps}>
                <div>
                    {this.props.nome}
                </div>
                <div onClick={this.handleUpdate}>
                    <FontAwesomeIcon icon={faUserEdit} />
                </div>
                <div onClick={this.handleDelete}>
                    <FontAwesomeIcon icon={faClosedCaptioning} />
                </div>
            </li>
        )
    }
}

class Admin extends React.Component {

    render() {

        return (
            <div className="container-admin">
                <CardInicial />
                <CardSobre />
                <CardEdital />
                <CardEquipe />
                <CardContato />
                <div className="container-card-admin">
                    <div className="titulo-admin">Edital</div>
                </div>
                
            </div>
        );
    }
}

export default Admin;
