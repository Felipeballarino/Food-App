import React,{useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import {getRecipeForId} from '../../actions/index'
import style from './detail.module.css'
import Loading from "../loading/loading";
import fotoScore from '../../Imagenes/1x/1x/outline_favorite_border_white_36dp.png'


const Details = (props)=>{
    
    const dispatch = useDispatch()

    const myRecipe = useSelector(state => state)

    useEffect(()=>{
        dispatch(getRecipeForId(props.match.params.id))
    },[dispatch])

    return(
        <div className={style.container}>
            <div className={style.card}>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                {console.log(myRecipe)}
                {
                    myRecipe.Loading? <Loading /> :
                    <div>
                        <h1 className={style.title}>{myRecipe.detail.name}</h1>

                        <img className={style.img} src={myRecipe.detail.image} alt='pone otra foto rey'/>

                        <div className={style.scoreBox}>
                            <img className={style.scoreImg} src={fotoScore}/>
                            <p className={style.score}>{myRecipe.detail.score}</p>
                        </div>

                        <h2 className={style.text}>Summary:</h2>
                        <p className={style.textAling} dangerouslySetInnerHTML= {{__html: myRecipe.detail.summary}}></p>

                        {myRecipe.detail.instructions && <h2 className={style.text}>Instructions:</h2>}
                        <p  className={style.textAling} dangerouslySetInnerHTML= {{__html: myRecipe.detail.instructions}}></p>

                        <h2 className={style.text}> Type Diet:</h2>
                        <ul>
                            {myRecipe.detail.diets && myRecipe.detail.diets.map(diet=>(
                                
                                <li className={style.diet}>{ diet[0].toUpperCase() + diet.slice(1)}</li>
                            ))}
                        </ul>


                    </div>  
                }
            </div>
            <Link to='/food/home' className={style.btnVolver}><button>Volver</button></Link>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )


}


export default Details;