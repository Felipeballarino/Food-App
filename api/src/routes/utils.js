const {recipeAll} = require('../request/index')
const {getBdInfo  } = require('../request/requestBD')
const {getApiID} = require('../request/requestID')
const { Recipe, Diet } = require('../db');


//Buscamos por nombre 
const searchName = async (data)=>{
    const recipe = await recipeAll();
     //console.log(recipe[100])
    const allSearch = recipe.filter(e=> e.name.toLowerCase().includes(data))
    if(allSearch.length >=1){
        return allSearch
    }
    return false
}
//Buscamos por id
const searchId = async (id) =>{
    //console.log('aca', id)
        const search = await getApiID(id);
        if(search){
            //console.log('aca')
            return search;
        }
        const dataBase = await getBdInfo();
        const searchDB = dataBase.find(e => e.id === id)
        if(dataBase){
            //console.log('aca1')
            return searchDB;
        } 
        //console.log('aca2')
        return search;
};

//Buscamos todas
const searchAll = async ()=>{
    const allSearch = await recipeAll()
    return allSearch;
}

const searchType = async ()=>{
    const dietType = await Diet.findAll({
        attributes:['id', 'title']
    })
    return dietType;
}


 
const createRecipe = async (name, summary, score,instructions,image,diets)=>{
     //console.log(name, summary, score,instructions,imagen,diets,'Esto es recipe')
    const recipeCreator = await Recipe.create({
        name,
        summary,
        score,
        instructions,
        image,
    });
    // console.log(recipeCreator, 'Recipe')
    diets.forEach(async (element) => {
        //console.log(element[0])
        const diet = element[0].toUpperCase() + element.slice(1);
        //console.log(diet, 'entro')
        //console.log(Recipe, 'loop')
        //console.log(Recipe)
        const onlyDiet = await Diet.findOne({
            where:{
                title:diet
            }
        })
        //console.log(onlyDiet, 'ondlydiet')
        await recipeCreator.setDiets(onlyDiet)
        await onlyDiet.setRecipes(recipeCreator)
    });
    
    //console.log(recipeCreator, 'recipeCreator')
    return recipeCreator;
}

const createDiet = async (diet)=>{
    const newDiet = diet[0].toUpperCase() + diet.slice(1);
    const findDiet = await Diet.findOne({
        where:{
            title:newDiet
        }})
        if(!findDiet){
            const dietCreate = await Diet.create({
                title: newDiet
            })
            return dietCreate
        }
        //console.log(findDiet[0].dataValues)
    return findDiet;
}

const searchForDiet = async  (diet) =>{
    const recipes = await recipeAll();
    //console.log(recipes.length, 'recipesAll')

    const recipeFilter = recipes.filter(recipe =>{
        let check = false;
        recipe.diets.forEach(el => {
            if(el.toLowerCase().includes(diet.toLowerCase())){
                check = true
            }
        })
        return check
    })
    //console.log(recipeFilter.length, 'recipesFilter')
    return recipeFilter;
}




module.exports={
    searchName,
    searchId,
    searchType,
    searchAll,
    createRecipe,
    createDiet,
    searchForDiet
 }