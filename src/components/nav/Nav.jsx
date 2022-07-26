import React from "react";
import Filtros from "../filtros/Filtros.jsx";
import Ordenar from "../ordenar/Ordenar.jsx";
import BuscarPokemon from "../buscarPokemon/BuscarPokemon.jsx";
import BorrarFiltros from "../borrarFiltros/BorrarFiltros.jsx";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";
import logo from "../../img/logo_pokemon.png";
import { useState } from "react";
import { BsCardList } from "react-icons/bs";





export default function Nav(){

    const[menuActivo, setMenuActivo] = useState(false);

    return(
        <div className={styles.contenedor}>
            
             <img src={logo} className={styles.logo} alt="Imagen no encontrada"/>
            
            
            
           <div className={styles.contenedorZonaFiltros}>
                <BsCardList onClick={() =>setMenuActivo(menuActivo ? false : true)} className={styles.boton}></BsCardList>
                
                {
                    
                    menuActivo ?
                        <div>
                        
                                            
                            <div className={styles.zonaFiltros}>
                                
                               

                               
                                <Ordenar></Ordenar>

                                
                                <Filtros></Filtros>
                                
                                
                                <div className={styles.contBotones}>
                                    <BorrarFiltros></BorrarFiltros>
                                </div>

                                <BuscarPokemon></BuscarPokemon>
                                
                                
                            </div>
                        </div>
                    : null
                    
                 }

            </div>  
        </div>
    )
}