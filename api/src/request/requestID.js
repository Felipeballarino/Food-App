const axios = require('axios').default;
require('dotenv').config();


const { APIKEY1, APIKEY2, APIKEY3, APIKEY4 } = process.env

let index = 1;
let apiKey;

const getApiID = async (id) =>{
     console.log('entre',id )
     switch (index) {
        case 1: apiKey = APIKEY1;break;
        case 2: apiKey = APIKEY2;break;
        case 3: apiKey = APIKEY3;break;
        case 4: apiKey = APIKEY4;break;
        default: apiKey = APIKEY1;break;
     }try{
         console.log(apiKey,'api')
        const recipeId= await axios.get (`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
        const e = recipeId.data;
        const getId={
            id: e.id,
            name: e.title,
            score: e.healthScore,                
            image: e.image,
            summary: e.summary,
            instructions: e.instructions,
            diets: e.diets  
        }
        return getId; 
    }catch(error){
        //console.log(error, 'error requestID')
        if (index >= 5) {
            index = 1;
        } else {
            index++
        }
        return false;
    };
}


module.exports={
    getApiID
 }