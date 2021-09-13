import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {getRecipeForName} from '../../actions/index'
import style from './searchBar.module.css'
import fotoBuscar from '../../Imagenes/1x/outline_search_white_24dp.png'

const SearchBar = ()=>{

    const dispatch = useDispatch();

    const [name, setName] = useState('');


    const handlerInputChange =(e)=>{
        e.preventDefault()
        setName(e.target.value)
        //console.log(e.target.value)
        
    }

    const handlerSubmit =(e) =>{
        e.preventDefault()
        dispatch(getRecipeForName(name))
        setName('')
    }

    return(
        <div>
            <div className={style.container}>
                <form onSubmit={(e)=>handlerSubmit(e)}>
                    <div>
                        <input 
                        className={style.input} 
                        type='text' 
                        value={name}
                        placeholder='Search...' 
                        onChange={(e)=>handlerInputChange(e)}/>
                        <button className={style.btn} type='submit'><img src={fotoBuscar}/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default SearchBar;