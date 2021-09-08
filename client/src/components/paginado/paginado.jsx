import React from "react";

const Paginado = ({recipesPerPage, allRecipe, paginado}) =>{
    const pageNumber = [];

    for(let i =0; i< Math.ceil(allRecipe/recipesPerPage); i++){
        pageNumber.push(i+1)

    }
 

    return (
        <div >
            <ul>
                {pageNumber &&
                pageNumber.map(number =>(
                            <a onClick={()=>paginado(number)}>{number}</a>
                ))}
            </ul>
        </div>
    )
}

export default Paginado;