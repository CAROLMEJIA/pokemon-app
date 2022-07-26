import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteFilters} from "../../redux/actions/actions.js";
import styles from "./borrarFiltros.module.css";
import { Link } from "react-router-dom";


export class BorrarFiltros extends Component{

    

    render(){

        const borrarFiltros = (e)=>{
            
            this.props.deleteFilters();
            
           
        }
        return(
            <div className={styles.contenedor}>
                <button type="button" onClick={(e) =>borrarFiltros(e)} className={styles.boton}>Borrar Filtros</button>
                <Link to="/crear" > <button className={styles.boton}>Crea un Pokémon</button></Link>
            </div>
        )
    }
}

export const mapDispatchToProps = (dispatch) =>{
    return{
        deleteFilters: () => {
            dispatch(deleteFilters())
        }
    }
};

export default connect(null, mapDispatchToProps)(BorrarFiltros)


