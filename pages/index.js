import React from 'react'
import '../estilo.css'
import Header from '../components/Header/Header'
import Inicio from '../components/Inicio/Inicio'
import Sobre from '../components/Sobre/Sobre'
import Equipe from '../components/Equipe/Equipe'
import Contato from '../components/Contato/Contato'
import FirebaseService from '../services/FirebaseService'
import Head from 'next/head'

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

  componentDidMount() {

    //initGA()
    //logPageView()
    //Router.router.events.on('routeChangeComplete', logPageView)

    // Pegando os dados da seção Inicio
    FirebaseService.getDocData('paginaInicio', 'e7f6P3zK64C4OV3u8sZm', (dataReceived) => {
      this.setState({
        titulo: dataReceived.titulo,
        subTitulo: dataReceived.subTitulo,
        curtaDescricao: dataReceived.curtaDescricao
      })
    })

    // Pegando os dados da seção Sobre
    FirebaseService.getDocData('paginaSobre', 'dZsgTkAuFlfWqBUzFkWW', (dataReceived) => {
      this.setState({
        sobre: dataReceived.sobre
      })
    })

    // Pegando os dados da seção Contato
    FirebaseService.getDocData('paginaContato', '0HgLksK6xzDB6p140ADY', (dataReceived) => {
      this.setState({
        email: dataReceived.email,
        facebook: dataReceived.facebook,
        instagram: dataReceived.instagram
      })
    })
    
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
 
  
  seteGoogleTags() {
    return {
      _html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-142112718-1');
      `
    }
  }

  render() {
    return (
      <React.Fragment>
        <Head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','UA-142112718-1');`,
        }}>
        </script>

        </Head>
        <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`}} />
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