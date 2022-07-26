//Botones/Opciones para filtrar por tipo de pokemon y por pokemon existente o creado por nosotros
import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTypes, filterType, filterDbApi, currentPage} from "../../redux/actions/actions.js";
import styles from "./filtros.module.css";


export default function Filtros(){

    const dispatch = useDispatch();
    let types = useSelector((state) => state.types);

    useEffect(() =>{
        dispatch(getTypes())
    },[]);

    function selectionType(e){
        dispatch(filterType(e.target.value))
        dispatch(currentPage(1))

    }

    function selectionDbApi(e){
        dispatch(filterDbApi(e.target.value))
        dispatch(currentPage(1))
    }

    return(
        <div className={styles.contenedor}>
            <p className={styles.p}>Filtros</p>
            
            <div className={styles.contenedor2}>
                <select onChange={(e) =>selectionType(e)}  className={styles.selects}>
                <option value="Todos">Tipos</option>
                
                    {
                        
                        types.map(t =>{
                            return(<option value={t.name} key={t.id}>{t.name}</option>)
                        })
                    }
                    
                
                </select>

                <select onChange={(e) =>selectionDbApi(e)}  className={styles.selects}>
                    <option>Origen</option>
                    <option value="Todos">Todos</option>
                    <option value="Api">API</option>
                    <option value="Db">CREADOS</option>
            </select>
        </div>
        </div>
    )
}