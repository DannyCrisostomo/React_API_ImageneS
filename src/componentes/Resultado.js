import React, { Component } from 'react';
import Imagen from './imagen';
import Paginacion from './Pagina'



class Resultado extends Component {
    mostrarImagenes = () => {

        const imagenes = this.props.imagenes;
        if (imagenes.length === 0) return null;
        console.log(imagenes);

        return (
            <React.Fragment>
                <div className="cartas">
                    {imagenes.map(imagen => (
                        <Imagen
                            key={imagen.id}
                            imagen={imagen}
                        />
                    ))}
                </div>
                <Paginacion
                    paginaAnterior={this.props.paginaAnterior}
                    paginaSiguiente={this.props.paginaSiguiente}
                />
            </React.Fragment>
        )
    }

    render() {
        return (
            <div>
                {this.mostrarImagenes()}
            </div>
        );
    }
}

export default Resultado;