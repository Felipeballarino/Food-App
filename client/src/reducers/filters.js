export const orderNameHighToLow=(recipe)=>{
    const recipeOrder = recipe.sort((a,b)=>{
        return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
    })
    return recipeOrder

}
export const orderNameLowToHigh=(recipe)=>{
    const recipeOrder = recipe.sort((a,b)=>{
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    })
    return recipeOrder

}

export const orderNameLowScore = (recipe)=>{
    const recipeOrder = recipe.sort((a,b)=>{
        return (parseInt(a.score) - parseInt(b.score))
    })
    return recipeOrder
}
export const orderNameHighScore = (recipe)=>{
    const recipeOrder = recipe.sort((a,b)=>{
        return (parseInt(b.score) - parseInt(a.score))
    })
    return recipeOrder
}