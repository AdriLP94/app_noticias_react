import React, { Component } from 'react';
import PropTypes from "prop-types";

class Formulario extends Component {
    state = {
        categoria : "general",
        pais : "us"
    }

    cambiarCategoria = e => {
        this.setState({
            categoria : e.target.value
        }, () => {
            this.props.consultarNoticias(this.state);
        })
    }

    cambiarPais = e => {
        this.setState({
            pais : e.target.value
        }, () => {
            this.props.consultarNoticias(this.state);
        })
    }

    render() {
        return (
            <div className="buscador row">
                <div className="col s12">
                    <form>
                        <h2>Categoria</h2>
                        <div className="input-field col s12 m10">
                            <select onChange={this.cambiarCategoria}>
                                <option value="general">General</option>
                                <option value="business">Negocios</option>
                                <option value="entertaitment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deporte</option>
                                <option value="technology">Tecnología</option>
                            </select>
                        </div>
                        <div className="input-field col s12 m2">
                            <select onChange={this.cambiarPais}>
                                <option value="us">USA</option>
                                <option value="ar">ARG</option>
                                <option value="mx">MEX</option>
                                <option value="it">IT</option>
                                <option value="gb">GB</option>
                                <option value="fr">FR</option>
                                <option value="de">DEU</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Formulario.propTypes = {
    consultarNoticias : PropTypes.func.isRequired
}

export default Formulario;