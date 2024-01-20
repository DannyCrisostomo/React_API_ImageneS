import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';
import Footer from './componentes/Footer';

class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  }
  scroll = () => {
    const elemento = document.querySelector('.contenedor_busqueda');
    elemento.scrollIntoView('smooth', 'start');
  }

  paginaAnterior = () => {
    //leer state de la pagina actuzal
    let pagina = this.state.pagina
    // si la pagina es igual a 1 entonces ya no retrocede
    if (pagina === 1) return null
    //sumar 1 a la pagina actuial
    pagina -= 1;
    //agregar el cambio a la paginna
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
    //console.log(pagina);
  }
  paginaSiguiente = () => {
    //leer state de la pagina actuzal
    let pagina = this.state.pagina
    //sumar 1 a la pagina actuial
    pagina += 1;
    //agregar el cambio a la paginna
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();

    });
    //console.log(pagina);
  }

  consultarApi = () => {
    const pagina = this.state.pagina
    const cantidad_imagenes = 30;
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=41898943-e54d7904b9dc143b4b3cbce98&q=${termino}&per_page=${cantidad_imagenes}&page=${pagina}`;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits })

        // this.setState({imagenes:resultado.hits})

        // console.log(resultado.hits)
      )
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarApi();
    })
  }

  render() {
    return (
      <div className='contenedor'>
        <header>
          <div className='contenedor_busqueda'>
          <p>Buscador de Imagenes</p>
          <Buscador
            datosBusqueda={this.datosBusqueda}
          />
          </div>
        </header>
        <div className="contenedor_imagenes">
          <Resultado imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente} />
        </div>
        <Footer />
      </div>
    );
  }
}


export default App;
