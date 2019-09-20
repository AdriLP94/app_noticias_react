import React from 'react';
import Noticia from "./Noticia";
import PropTypes from "prop-types";

const ListNoticias = ({noticias}) => {

    const listado = (noticias.length && Array.isArray(noticias)) ?  
        noticias.map(noticia =>(
            <Noticia
                key = {noticia.url}
                noticia = {noticia}
            />
        ))
        :<p> No hay noticias de este tipo, porfavor cambie de país o categoría </p>;

    return (
        <div className="row">
            {listado}
        </div>
    );
};

ListNoticias.propTypes = {
    noticias : PropTypes.array.isRequired
}

export default ListNoticias;