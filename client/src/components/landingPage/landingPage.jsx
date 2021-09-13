import React from 'react';
import { Link } from 'react-router-dom';
import style from './landing.module.css'

const LandingPage = ()=>{
    return(
        <div className = {style.imgBody}>
            <div className={style.body}>
                <div className={style.name}>
                    <h2 className={style.food1}>WELCOME</h2>
                    <h2 className={style.food2}>TO THE</h2>
                    <h2 className={style.food3}>FOOD</h2>
                    <h2 className={style.food4}>APP</h2>
                    <div className={style.button}> 
                        <Link to ='/food/home'>
                            <button className={style.btn}>Ingresar</button>
                        </Link>
                    </div>
                </div>
               
            </div>
          
        </div>
    )
}

export default LandingPage;