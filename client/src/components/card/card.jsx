import React from "react";
import style from './card.module.css'



const Card = ({title,imagen, diet}) =>{

    return(
        <div className={style.card}>
            {imagen ?
                <img className={style.imgs} src ={imagen} width='200px' height = '250px'/> :
                <img src="https://avatars.githubusercontent.com/u/2078339?v=4" width='200px' height = '250px'/>
            }
             <h3 className={style.title}>
                {title}
            </h3>
            <ul className={style.ul}>
            {diet && diet.map(d=>(
                <li>{d}</li>
            ))}
            </ul>
        </div>
    )
}

export default Card;