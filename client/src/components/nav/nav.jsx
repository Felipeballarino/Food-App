import React from 'react';
import { Link } from 'react-router-dom';
import SelectType from '../filters/dietType';
import OrderAlpha from '../filters/orderAlfa';
import Score from '../filters/score';

const Nav = () =>{

    return(
        <div>
            <Link to ='/food/home'>
                {/* <img src ={} alt= 'Img not found'/> */}
                <span>Food App</span>
            </Link>
            <Link to='/food/create'>
                <span>Create new recipe</span>
            </Link>
            <br/>
            <SelectType/>
            <OrderAlpha/>
            <Score/>
        </div>
    )

}

export default Nav;