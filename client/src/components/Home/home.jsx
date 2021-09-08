import React from "react";
import { useState, useEffect } from "react";
import{useDispatch, useSelector} from 'react-redux';
import Card from '../card/card'
import { getRecipe } from "../../actions";
import { Link } from "react-router-dom";
import Paginado from "../paginado/paginado.jsx";

const Home = () =>{

    const dispatch = useDispatch();

    const allRecipe = useSelector((state)=>state) // mapStateToProps: guardame en allRecipe todo lo que este en el estado de recipes

    //paginado
    const [currentPage, setCurrentPage] = useState(1)
    const [recipesPerPage, setRecipesPerPage] = useState(9)
    const indexOfLastRecipe = currentPage * recipesPerPage;// 9
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;//0
    const currentRecipes = allRecipe.recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

    const paginado = (pageNumber)=>{
        setCurrentPage (pageNumber) 
    }

    useEffect (()=>{
        dispatch(getRecipe())
    },[dispatch])

    return (
        <div>
            <Paginado 
                recipesPerPage={recipesPerPage}
                allRecipe = {allRecipe.recipes.length}
                paginado={paginado}
                />
            {allRecipe.loading ? <h1>Loading...</h1> : 
                (
                    currentRecipes && currentRecipes.map(el =>{
                        return(
                            <Link to = {'/food/home/' + el.id}>
                                <Card title ={el.name} imagen = {el.img} diet ={el.diets} key ={el.id}/>
                            </Link>
                        )
                    })
                )
            }
        </div>
    )
}

export default Home;