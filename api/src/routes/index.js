const { Router } = require('express');

const {searchName, searchId, searchType,searchAll, createRecipe, createDiet, searchForDiet} = require('./utils')



// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
  
const router = Router();

// Configurar los routers

router.get('/recipes', async (req, res, next)=>{
    const {name} = req.query;

    if(name){
        //console.log(name.toUpperCase(), ' nombre')
        const recipe = await searchName(name.toLowerCase())
        if(recipe){
            return res.json(recipe);
        }else{
            return res.status(404).json({msg: 'El nombre de la receta no es valido'})
        }
    }
    const any = await searchAll()
    return res.json(any)
})

router.get('/recipes/:id', async (req, res)=>{
    const { id } = req.params; 
    const recipeId = await searchId(id);

    if(recipeId){
        return res.json(recipeId)
    }
    return res.status(404).json({msg: 'El id no es valido'})
})

router.get('/types', async (_req,res)=>{
    const diets = await searchType();
    return res.status(200).json(diets)
})


router.post('/recipe', async (req, res) => {
  const {name, summary, score,instructions,imagen,diets} = req.body;
  if(!name || !summary || !(diets.length >= 1)){
      return res.status(404).json({msg: 'Faltan datos, vuelve a intentarlo'})
  }
  await diets.forEach(async element => await createDiet(element))
  //console.log(name, summary, score,instructions,imagen,diets)
  const nose = await createRecipe(name, summary, score,instructions,imagen,diets) 
  return res.status(200).json(nose)
})

router.get('/recipes/diet/:type',async (req, res)=>{
    const {type} = req.params;

    const recipesDiets = await searchForDiet(type);
    
    if(recipesDiets) {
        //console.log(recipesDiets.length)
        return res.json(recipesDiets)
    }
    return res.status(404).json({msg: ' La dieta ingresada no es valida'})

})


// Ejemplo: router.use('/auth', authRouter);
module.exports = router;
