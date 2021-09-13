import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"; 
import {getDietsAll, getDietsTypes,getRecipe} from '../../actions/index'
import style from './filters.module.css'



const SelectType = () =>{

    const dispatch = useDispatch();
    const allState = useSelector(state =>state)
    const [diet, setDiet] = useState("")

    useEffect(() => {
        dispatch (getDietsAll())
    }, [dispatch])

    const handlerChange = (e)=>{
        e.preventDefault();
        setDiet(e.target.value);
        if(e.target.value === "All" ){
            dispatch(getRecipe())
        }else {
            dispatch(getDietsTypes(e.target.value))
        }
        setDiet("")
    }

    

    return(
        <select value={diet} onChange={handlerChange}  className={style.container}>
            <option value = "" >Diets Order:</option>
            <option value = "All"  className={style.option}>All</option>
            {
            //console.log(allState.diets, 'estado'),
            allState.diets && allState.diets.map(diet=>
                <option value={diet.title} className={style.option}>
                    {diet.title}
                </option>)
            }
        </select>
            
    )
}

export default SelectType;