require('dotenv').config();

const axios = require('axios').default;

//BUSCAMOS UNA RECETA POR ID
const { APIKEY1, APIKEY2, APIKEY3, APIKEY4 } = process.env

var index = 1;
var apiKey;

//BUSCAR UNA LISTADO DE RESETAS completas
const getApiInfo = async ()=>{
    switch (index) {
        case 1:  apiKey = APIKEY1;break;
        case 2:  apiKey = APIKEY2;break;
        case 3:  apiKey = APIKEY3;break;
        case 4:  apiKey = APIKEY4;break;
        default:  apiKey = APIKEY1;break;
    }try{
        const recipeApi = await axios.get (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&number=99`)
        const recipe = recipeApi.data.results;
        return recipe.map(e=>{
            return {
                id: e.id,
                name: e.title,
                summary:e.summary,        
                image: e.image,
                instructions:e.instructions,
                score: e.healthScore,
                diets: e.diets,    
            }
        })   
    }catch(error){
        //console.log(error,'error requestApi', index)
        if (index >= 5) {
            index = 1;
        } else {
            // console.log(index, ' index')
            index++
        }
        return [];
    };
}


module.exports={
    getApiInfo
 }