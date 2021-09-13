const {getApiInfo} = require('./requestApi')
const {getBdInfo} = require('./requestBD')
const requestID = require('./requestID')


const recipeAll = async ()=>{
    const apiRecipe = await getApiInfo();
    const dbRecipe = await getBdInfo();
    const allRecipe = [... dbRecipe, ...apiRecipe ]
    //console.log(dbRecipe, 'todo data bas')
 
    return allRecipe;
}
module.exports = {
    getApiInfo,
    getBdInfo,
    requestID,
    recipeAll
}