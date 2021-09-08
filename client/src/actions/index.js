import axios from 'axios'
import {
    GET_LIST,
    GET_LIST_FOR_ID,
    GET_LIST_FOR_NAME,
    LOADING, 
    FILTER_FOR_NAME_DESCENDENT,
    FILTER_FOR_NAME_ASCENDENT,
    FILTER_FOR_LOW_SCORE,
    FILTER_FOR_HIGH_SCORE,
    GET_DIETS,
    GET_DIET_TYPES
} from './names'

//TRAER TODAS LAS RECETAS
export const getRecipe = () =>{
     return (dispatch)=>{
        dispatch({type: LOADING});
        try{
            axios.get('http://localhost:3001/recipes')
            .then(response =>dispatch({
                type:GET_LIST,
                payload:response.data
            }))
        }catch(error){
            console.log(error)
            return dispatch({
                type:GET_LIST,
                payload:[]
            })
        }
    }
}

//TRAER RECETA POR NOMBRE
export const getRecipeForName = (name) =>{
    return (dispatch) =>{
        dispatch({type:LOADING});
        try{
            axios.get(`http://localhost:3001/recipes?name=${name}`)
            .then(response => dispatch({
                type:GET_LIST_FOR_NAME,
                payload:response.data
            }))
        }catch(error){
            console.log(error)
            return dispatch({
                type:GET_LIST_FOR_NAME,
                payload:[]  
            })

        }
    }
}

//TRAER DETALLES PO ID
export const getRecipeForId = (id)=>{
    return (dispatch)=>{
        dispatch({type:LOADING});
        try{
            axios.get(`http://localhost:3001/recipes/${id}`)
            .then(response =>dispatch({
                type:GET_LIST_FOR_ID,
                payload:response.data
            }))
        }catch(error){
            console.log(error)
            return dispatch({
            type:GET_LIST_FOR_ID,
            payload:[]  
        })
        }
    }

}


//-----------FILTROS-------------------------------------------------------

export const filterForNameDescendent =()=>{
    return {
        type:FILTER_FOR_NAME_DESCENDENT
    }
}

export const filterForNameAscendent =()=>{
    return {
        type:FILTER_FOR_NAME_ASCENDENT
    }
}

export const filterForLowScore =()=>{
    return {
        type:FILTER_FOR_LOW_SCORE
    }
}
export const filterForHighScore =()=>{
    return {
        type:FILTER_FOR_HIGH_SCORE
    }
}

export const getDietsAll = () =>{
    return (dispatch)=>{
        dispatch({type:LOADING});
        try{
             axios.get('http://localhost:3001/types')
             .then(response =>dispatch({
                type:GET_DIETS,
                payload:response.data
            }))
        }catch(error){
        console.log(error)
        return dispatch({
            type:GET_DIETS,
            payload:[]
        })
        }
    }
}

export const getDietsTypes = (type)=>{
   return (dispatch)=>{
    dispatch({type:LOADING});
    try{
        axios.get(`http://localhost:3001/recipes/diet/${type}`)
        .then(response=>dispatch({
            type:GET_DIET_TYPES,
            payload:response.data
        }))
    }catch(error){
        console.log(error)
        return dispatch({
            type:GET_DIET_TYPES,
            payload:[]
        })
    }
   }
}


