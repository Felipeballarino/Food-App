import React from "react";
import './card.css';

const Card = ({title,imagen, diet}) =>{

    return(
        <div className='card'>
            <h3>
                {title}
            </h3>
            <img src ={imagen} alt="img not found" width='200px' height = '250px'/>
            <br/>
            <span>{diet}</span>
        </div>
    )
}

export default Card;