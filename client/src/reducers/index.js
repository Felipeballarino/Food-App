import {
    orderNameHighToLow, 
    orderNameLowToHigh,
    orderNameLowScore,
    orderNameHighScore,

} from './filters';

const { 
    GET_LIST,
    LOADING,
    GET_LIST_FOR_NAME, 
    FILTER_FOR_NAME_DESCENDENT,
    FILTER_FOR_NAME_ASCENDENT,
    FILTER_FOR_LOW_SCORE,
    FILTER_FOR_HIGH_SCORE,
    GET_DIETS,
    GET_DIET_TYPES
 } = require("../actions/names");

const initialState = {
    recipes:[],
    diets:[],
    loading:false
}

const reducer = (state=initialState, {type, payload})=>{
    switch(type){
        case GET_LIST: 
            return{
                ...state,
                loading:false,
                recipes:payload,
            }
        case GET_LIST_FOR_NAME: // buscar 
            return{
                ...state,
                loading:false,
                recipes:payload
            }
        case FILTER_FOR_NAME_DESCENDENT://filtro de A-Z
            return{
                recipes:orderNameHighToLow(state.recipes)
            }
        case FILTER_FOR_NAME_ASCENDENT: // filtro de Z-A
            return{
                recipes:orderNameLowToHigh(state.recipes)
            }
        case FILTER_FOR_LOW_SCORE: //filtro de menor a mayor puntaje
            return{
                recipes:orderNameLowScore(state.recipes)
            }
        case FILTER_FOR_HIGH_SCORE: // filtro de mayor a menor puntaje
            return{
                recipes:orderNameHighScore(state.recipes)
            }
        case GET_DIETS://traer todas las dietas
            return {
                ...state,
                diets:payload
            }
        case GET_DIET_TYPES : // traer recetas por tipo de dieta
            return{
                ...state,
                loading:false,
                recipes:payload
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }

}

export default reducer;