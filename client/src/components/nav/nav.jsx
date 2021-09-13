import React from 'react';
import { Link } from 'react-router-dom';
import SelectType from '../filters/dietType';
import OrderAlpha from '../filters/orderAlfa';
import Score from '../filters/score';
import SearchBar from '../searchBar/searchBar';
import style from './nav.module.css'
import foto from '../../Imagenes/2.png'
import foto2 from '../../Imagenes/1x/1x/outline_add_circle_outline_white_36dp.png'
import fotoHome from '../../Imagenes/1x/1x/outline_home_white_36dp.png'



const Nav = () =>{

    return(
        <div>
            <div className={style.container}>
                <img  className={style.foto} src={foto} alt= ''/>
                <Link className={style.nav1} to ='/food/home'>
                    <span>FOOD APP</span>
                </Link>

                <div className={style.nav2}>
                    <SearchBar />
                </div>

                <Link to = '/food/home' className={style.home}>
                        <img className={style.iconHome} src={fotoHome} alt=''/>
                        <span className={style.home} >Home</span>
                </Link>


                <Link  to='/create'>
                    <img className={style.icon} src={foto2} alt=''/>
                    <span className={style.nav} >Create new recipe</span>
                </Link>

                <br/>
                <div className={style.filterConteiner}>
                    <SelectType className={style.filter}/>
                    <OrderAlpha className={style.filter}/>
                    <Score className={style.filter}/>
                </div>

            </div>
        </div>
    )

}

export default Nav;