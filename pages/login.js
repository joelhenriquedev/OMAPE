import React from 'react'
import { firebaseAuth } from '../lib/firebase'
import '../estilo.css'
import Link from 'next/link'
import FirebaseService from '../services/FirebaseService'
import router from 'next/router';

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.handleSignIn = this.handleSignIn.bind(this)

        this.state = {
            errorAlert: false
        }
    }

    handleSignIn = () => {
        
        firebaseAuth.signInWithEmailAndPassword(this.refs.email.value, this.refs.senha.value)
        .then(() => {
            //alert('You are signed In');
            router.push('/admin');
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            //alert('Err');
            this.setState({
                errorAlert: true
            })
            // ...
          });
        

    }
    handleLogout = () => {
        firebaseAuth.signOut().then(function () {
            alert('Logout successful');
        }).catch(function (error) {
            alert('OOps something went wrong check your console');
            console.log(err);
        });
    }
    render() {

        

        return (
            <div className="container-login">
                <div className="panel-login">
                <div className="container-title-login">
                    <p>Login</p>
                    <p>para acessar a área administrativa você precisa fazer login</p>
                </div>
                <div className="container-input-login">
                    <label>E-mail:</label>
                    <input type="email" ref="email" />
                    <label>Senha:</label>
                    <input type="password" ref="senha" />
                </div>
                {this.state.errorAlert === true ? <div className="panel-error-login">
                <div></div>
                <div>Email ou senha erradas</div>
            </div> : ''}
                <div className="container-button-login">
                    <button onClick={this.handleSignIn}>entrar</button>
                </div>
            </div>
                {/**<div>
                <div className="hero">
                    <h1 className="title">Página de login</h1>
        
                    <div className="row">
                    <ul>
              <li><Link href="/admin"><a>Efetuar login</a></Link></li>
            </ul>
                        <button onClick={this.handleSignIn}>Entrar</button>
                        <button onClick={this.handleLogout}>Sair</button>
                    </div>
                </div>
            </div>  */}
            </div>

                
        )
    }
 
}

export default Login