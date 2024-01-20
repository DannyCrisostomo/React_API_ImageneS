import React, { Component } from 'react';

class Buscador extends Component {

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();

        //Tomamos el valor del input 
        const termino = this.busquedaRef.current.value;

        //Lo enviamos al component4e principal
        this.props.datosBusqueda(termino);
    }
    render() {
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className="">
                    <div className="">
                        <input ref={this.busquedaRef} type="text" className="buscador_input"
                            placeholder="Busca tu imagen. ejemplo: futbol"></input>
                    </div>
                </div>
                <div>
                    <input type="submit" className="boton"
                        value="Buscar..."></input>
                </div>
            </form>
        );
    }
}
export default Buscador;