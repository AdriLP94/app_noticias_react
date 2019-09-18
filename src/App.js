import React, { Component, Fragment } from 'react';
import Header from "./components/Header";
import ListaNoticias from "./components/ListaNoticias"

class App extends Component {

  state = { 
    noticias : [] 
  }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async () => {
    const url = 'https://newsapi.org/v2/top-headlines?language=es&apiKey=3ceec42be51f4aca9cf4b8f16e5b333a';

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
          titulo="Noticias"
        />
        <div className="container white contenedor-noticias">
          <ListaNoticias 
            noticias={this.state.noticias}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
