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
    GET_DIET_TYPES,
    POST_RECIPE,
    GET_LIST_FOR_ID
 } = require("../actions/names");

const initialState = {
    recipes:[],
    diets:[],
    detail:[],
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
        case GET_LIST_FOR_NAME: // Search bar
            return{
                ...state,
                loading:false,
                recipes:payload
            }
        case GET_LIST_FOR_ID: //detalle receta
            return {
                ...state,
                detail:payload
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
        case POST_RECIPE:
                return {
                ...state
            }
        case LOADING:
                return {
                    ...state,
                    loading: true
                }
        case FILTER_FOR_NAME_DESCENDENT://filtro de A-Z
                return{
                    ...state,
                    recipes:orderNameHighToLow(state.recipes),
                }
        case FILTER_FOR_NAME_ASCENDENT: // filtro de Z-A
                return{
                    ...state,
                    recipes:orderNameLowToHigh(state.recipes), 
                }
        case FILTER_FOR_LOW_SCORE: //filtro de menor a mayor puntaje
                return{
                    ...state,
                    recipes:orderNameLowScore(state.recipes),  
                }
        case FILTER_FOR_HIGH_SCORE: // filtro de mayor a menor puntaje
                return{
                    ...state,
                    recipes:orderNameHighScore(state.recipes),   
                }
        default:
                return state;
    }

}

export default reducer;