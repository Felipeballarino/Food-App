import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {filterForNameAscendent, filterForNameDescendent} from '../../actions/index'

const OrderAlpha = () =>{

    const dispatch = useDispatch();

    const [order, setOrder] = useState(0)

    const handlerChange = (e)=>{
        e.preventDefault();
        setOrder(parseInt(e.target.value));
        if(parseInt(e.target.value) === 1 ){
            dispatch(filterForNameAscendent())
        }else if(parseInt(e.target.value) === 2){
            dispatch(filterForNameDescendent())
        }
        setOrder(0)
        

    }

    return(
        <select value = {order} onChange={handlerChange}>
            <option value = {0} > Alphabetical Order : </option>
            <option value = {1}>A-Z</option>
            <option value = {2}>Z-A</option>
        </select>
    )
}

export default OrderAlpha;