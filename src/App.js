import React, { Component, Fragment } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import ListaNoticias from "./components/ListaNoticias";

class App extends Component {

  state = { 
    noticias : [] 
  }

  componentDidMount() {
    this.consultarNoticias();
  }


  consultarNoticias = async (params = {categoria : "general", pais : "us"}) => {
    const url = `https://newsapi.org/v2/top-headlines?category=${params.categoria}&country=${params.pais}&apiKey=${process.env.REACT_APP_APIKEY}`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias : noticias.articles
    })
  }

  render() {
    return (
      <Fragment>
        <Header
          titulo="API Noticias"
        />
        
        <div className="container white contenedor-buscador">
          <Formulario
            consultarNoticias={this.consultarNoticias}
          />
        </div>
        <div className="container white contenedor-noticias">
          <ListaNoticias 
            noticias={this.state.noticias}
          />
        </div>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
