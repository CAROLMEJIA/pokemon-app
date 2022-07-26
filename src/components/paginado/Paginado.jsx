import React from "react";
import styles from "./paginado.module.css";
import { useDispatch } from "react-redux";
import {currentPage} from "../../redux/actions/actions.js"

export default function Paginado({pokemonsPorPagina, filtrados, paginado}){

    const dispatch = useDispatch()

    function numero(value){
        dispatch(currentPage(value))
    }

    const numeroPaginas=[];

    for(let i=1; i<= Math.ceil(filtrados/pokemonsPorPagina); i++){
        numeroPaginas.push(i)
    }

    return(
        <div className={styles.contenedor}>
            <div className={styles.lista}>
                {
                    numeroPaginas.length >0 && numeroPaginas.map(n =>{
                        return(
                            <>
                           
                            <div key={n} className={styles.item} >
                                <button onClick={(e) => numero(n)} className={styles.boton} key={n}>{n}</button>

                            </div>
                            </>
                        )
                    })
                }
            </div>

        </div>
    )

}

