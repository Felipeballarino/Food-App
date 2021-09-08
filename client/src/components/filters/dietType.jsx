import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"; 
import {getDietsAll, getDietsTypes,getRecipe} from '../../actions/index'


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
        <select value={diet} onChange={handlerChange}>
            <option value = "" >Diets Order:</option>
            <option value = "All" >All</option>
            {
            //console.log(allState.diets, 'estado'),
            allState.diets && allState.diets.map(diet=>
                <option value={diet.title}>
                    {diet.title}
                </option>)
            }
        </select>
            
    )
}

export default SelectType;