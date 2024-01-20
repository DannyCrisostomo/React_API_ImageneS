import React from 'react'

const Imagen = (props) => {

    const {
        largeImageURL,
        likes,
        webformatURL,
        tags,
        views,
        comments,
        userImageURL,
        user,
        downloads,


    } = props.imagen;


        return (
            <div className="card">
                <div className="perfil">
                    <img src={userImageURL} alt={tags} className="card-img-top"></img>
                    <p className="card-text">{user}</p>
                </div>
                <div className="imagen_previo">
                    <img src={webformatURL} alt={tags} className="card-img-top"></img>
                </div>
                <div>


                    <div className="like">
                        <div className="likes">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" className="corazon" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                            <p className="card-text"> {likes} Me gusta</p>
                        </div>


                        <div className="like">
                            <div className="likes">
                                <svg width="20px" height="20px" data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title /><path d="M113,0H15A15,15,0,0,0,0,15V79.57a15,15,0,0,0,15,15H38.28a1,1,0,0,1,1,1V121a7,7,0,0,0,11.95,4.95L82.31,94.87a1,1,0,0,1,.71-.29h30a15,15,0,0,0,15-15V15A15,15,0,0,0,113,0Zm9,79.57a9,9,0,0,1-9,9H83a7,7,0,0,0-4.95,2L47,121.7a1,1,0,0,1-1.71-.71V95.57a7,7,0,0,0-7-7H15a9,9,0,0,1-9-9V15a9,9,0,0,1,9-9h98a9,9,0,0,1,9,9Z" /></svg>
                                <p className="card-text"> {comments} Comentarios</p>
                            </div>
                        </div>


                    </div>



                    <div className="like">

                        <div className="likes">
                            <svg width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m0 0h32v32h-32z" /><path d="m16 4c8.836556 0 16 7.983908 16 12s-7.163444 12-16 12-16-7.983908-16-12 7.163444-12 16-12zm0 6c-3.3137085 0-6 2.6862915-6 6s2.6862915 6 6 6 6-2.6862915 6-6-2.6862915-6-6-6zm0 2c2.209139 0 4 1.790861 4 4s-1.790861 4-4 4-4-1.790861-4-4 1.790861-4 4-4z" fill="#202327" /></g></svg>
                            <p className="card-text">{views} Vistas</p>
                        </div>


                        <div className="likes">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 11.25L6 10.5L9.74999 10.5L9.74999 12L6.75 12L6.75 18L17.25 18L17.25 12L14.25 12L14.25 10.5L18 10.5L18.75 11.25L18.75 18.75L18 19.5L6 19.5L5.25 18.75L5.25 11.25ZM12.75 7.06064L12.75 15L11.25 15L11.25 7.06075L9.53039 8.78037L8.46973 7.71971L12.0001 4.18937L15.5304 7.71971L14.4697 8.78037L12.75 7.06064Z" fill="#080341" />
                            </svg>
                            <p className="card-text">{downloads} Descargas</p>
                        </div>


                    </div>
                    <a href={largeImageURL} target="blank" className="btn" >Ver Imagen</a>
                </div>
            </div>
        )
    }

    export default Imagen;