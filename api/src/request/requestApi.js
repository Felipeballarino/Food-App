require('dotenv').config();

const axios = require('axios').default;

//BUSCAMOS UNA RECETA POR ID
const { APIKEY1, APIKEY2, APIKEY3, APIKEY4 } = process.env

let index = 1;
let apiKey;

//BUSCAR UNA LISTADO DE RESETAS completas
const getApiInfo = async ()=>{
    switch (index) {
        case 1: apiKey = APIKEY1;
        case 2: apiKey = APIKEY2;
        case 3: apiKey = APIKEY3;
        case 4: apiKey = APIKEY4;
        default: apiKey = APIKEY1;
    }try{
        const recipeApi = await axios.get (`https://api.spoonacular.com/recipes/complexSearch?apiKey=2b8e3c8d98f443119b88c0a75fd3544f&addRecipeInformation=true&number=99`)
        const recipe = recipeApi.data.results;
        return recipe.map(e=>{
            return {
                id: e.id,
                name: e.title,        
                img: e.image,
                score: e.healthScore,
                diets: e.diets,    
            }
        })   
    }catch(error){
        //console.log(error,'error requestApi', index)
        if (index >= 5) {
            index = 1;
        } else {
            //console.log(index)
            index++
        }
        return [];
    };
}


module.exports={
    getApiInfo
 }