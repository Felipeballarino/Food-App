import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { filterForLowScore, filterForHighScore} from '../../actions/index'


const Score = () =>{

    const dispatch = useDispatch();

    const [order, setOrder] = useState(0)

    const handlerChange = (e) =>{
        e.preventDefault();
        setOrder(parseInt(e.target.value));
        if(parseInt(e.target.value) === 1){
            dispatch(filterForHighScore())
        }else if( parseInt(e.target.value)=== 2){
            dispatch(filterForLowScore())
        }
        setOrder(0)
    
    }

    return(
        <select value = {order} onChange={handlerChange}>
            <option value ={0}>Score Order:</option>
            <option value= {1}>Higher to Lower</option>
            <option value ={2}>Lower to Higher</option>
        </select>
    )
}

export default Score;