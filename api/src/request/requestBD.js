

const {Recipe, Diet} = require('../db')

//BUSCAR RECETA EN BASE DE DATOS

const getBdInfo = async () =>{
    try{
        const recipeAll = await Recipe.findAll({
            include:{
                model: Diet,
                attributes:['title'],
                through:{
                    attributes: []
                }
            }
        });
    
        const recipe = recipeAll.map(e=>{
            return {
                id: e.id,
                name: e.name,
                summary: e.summary,
                score: e.score,
                instructions: e.instructions,
                imagen:e.image,
                diets: e.diets.map(diet => diet.title)
            }
        })
        return recipe
        
    }catch (e) {
        console.log(e, 'error requestID');
        return false;
    };

}


module.exports={
    getBdInfo
 }