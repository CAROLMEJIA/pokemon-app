import axios from "axios";
import {
    GET_POKEMONS,
    GET_TYPES, 
    FILTER_DB_API, 
    FILTER_TYPE, 
    GET_DETAIL, 
    FIND_POKEMON, 
    ORDER_ATTACK, 
    ORDER_AZ, 
    DELETE_FILTERS, 
    CREATE_POKEMON, 
    DELETE_POKEMON, 
    LOADING, 
    CURRENT_PAGE
} from "../types/types.js";


const URL = "https://pokemon-back-deploy.herokuapp.com"


export const loading = (value) =>{
    return{
        type: LOADING,
        payload: value
    }
}



export const  getPokemons = () =>{
    return async function(dispatch){
         dispatch(loading(true));
         return fetch(`${URL}/pokemons`)
        .then(r=>r.json())
        .then(data =>{
            dispatch(loading(false));
            return dispatch({
                type: GET_POKEMONS,
                payload:data
            })
        })
        
    }
}

export function getTypes(){
    return async function(dispatch){
        let types = await axios.get(`${URL}/types`)
        return dispatch({
            type: GET_TYPES,
            payload: types.data
        })
    }
}


export const filterType = (type) =>{
    return{
        type: FILTER_TYPE,
        payload: type
    }
}

export const filterDbApi =(value) =>{
    console.log(value)
    return{
        type: FILTER_DB_API,
        payload: value
    }
}

export function findPokemon(name){
    return async function(dispatch){
        dispatch(loading(true));
        return fetch(`${URL}/pokemons?name=${name}`)
        .then(r => r.json())
        .then(data =>{
           
            dispatch(loading(false));
            return dispatch({
                type: FIND_POKEMON,
                payload: data
            })
        })
    }
}

export const getDetail = (id)=>{
    return async function(dispatch){
        dispatch(loading(true));
        let detail = await axios.get(`${URL}/pokemons/${id}`)
        dispatch(loading(false));
        return dispatch({
            type: GET_DETAIL,
            payload: detail.data
        })
    }
}

export function orderByAz(value){
    return{
        type: ORDER_AZ,
        payload: value
    }
}

export function orderByAttack(value){
    return{
        type: ORDER_ATTACK,
        payload: value
    }
}

export function deleteFilters(){
    return{
        type: DELETE_FILTERS,
    }
}

export function createPokemon(info){
    return async function(dispatch){
        let pokemon = await axios.post(`${URL}/pokemons`, info)
        return dispatch({
            type: CREATE_POKEMON,
            payload: pokemon
        })
    }
}

export function deletePokemon(id){
   return async function(dispatch){
       dispatch(loading(true));
       let deletePoke = await axios.delete(`${URL}/pokemons/${id}`)
       dispatch(loading(false));
       return dispatch({
           type: DELETE_POKEMON,
           payload: id
       })
   }
   
}

export function currentPage(value){
    return{
        type: CURRENT_PAGE,
        payload: value
    }
}