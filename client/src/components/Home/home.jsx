import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Card from '../card/card'
import { getRecipe } from "../../actions";
import { Link } from "react-router-dom";
import Paginado from "../paginado/paginado.jsx";
import style from './home.module.css'
import Loading from "../loading/loading";




const Home = () =>{

    const dispatch = useDispatch();

    const allRecipe = useSelector((state)=>state) 

    //paginado
    const [currentPage, setCurrentPage] = useState(1)
    const [recipesPerPage, _setRecipesPerPage] = useState(9)
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
        <div className={style.home} >
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Paginado 
                recipesPerPage={recipesPerPage}
                allRecipe = {allRecipe.recipes.length}
                paginado={paginado}
                />
            <div className={style.cardContainer}>
            {allRecipe.loading ? <Loading/> : 
                (
                    currentRecipes && currentRecipes.map(el =>{
                        return(
                                <Link to = {'/food/detail/' + el.id}>
                                    <Card 
                                    title ={el.name} 
                                    imagen = {el.image? el.image : <img src="https://avatars.githubusercontent.com/u/2078339?v=4"/>}
                                    diet ={el.diets} 
                                    key ={el.id}/>
                                </Link>
                        )
                    })
                )
            }
            </div>
            <Paginado 
                recipesPerPage={recipesPerPage}
                allRecipe = {allRecipe.recipes.length}
                paginado={paginado}
                className={style.paginadoB}
                />
                <br></br>
        </div>
    )
}

export default Home;