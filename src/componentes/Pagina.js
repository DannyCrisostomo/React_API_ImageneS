import React from 'react'

const Paginacion = props => {
    return (
        <div className="botones">
            <buton onClick={props.paginaAnterior} type="button" className="Anterior">Anterior &larr;</buton>
            <buton onClick={props.paginaSiguiente} type="button" className="Siguiente">Siguiente &rarr;</buton>
        </div>
    )
}
export default Paginacion;
