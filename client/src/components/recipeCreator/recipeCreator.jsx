import React,{useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory} from 'react-router-dom'
import {createRecipe, getDietsAll} from '../../actions/index'
import style from './creator.module.css'
import flecha from '../../Imagenes/1x/1x/outline_arrow_back_white_48dp.png'

const Validator = (input) =>{
    let errors = {}
    if(!input.name){
        errors.name = 'Oligatory Field'
    } 
    if(!input.summary){
        errors.summary = 'Oligatory Field'
    }
    if(input.name && input.summary){
        errors = true
    }
    return errors

}
const RecipeCreator = ()=>{
    const  dispatch = useDispatch();
    const diets = useSelector(state=>state.diets)

    const history = useHistory()

    const [errors, setErrors] = useState({
        name: ' ',
        summary:''
    })

    const [input, setInput] = useState({
        name:"",
        summary:'',
        score:'',
        instructions:'',
        image:'',
        diets:[]
    })

    useEffect(()=>{
        dispatch(getDietsAll())
    },[dispatch])

    const handlerInputChange = (e)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
        setErrors(Validator({
            ...input,
            [e.target.name]:e.target.value
        }))

    }



    
    function removeItemFromArr ( arr, item ) {
        var i = arr.indexOf( item );
        arr.splice( i, 1 ); 
    }

    const handlerCheckbox = (e)=>{
        if(e.target.checked){
            setInput({
            ...input,
            diets:[...input.diets, e.target.value]
            })
        }else{
           removeItemFromArr(input.diets,e.target.value)
        }
    }

    const handlerSubmit = ()=>{
        dispatch(createRecipe(input))
            alert('Recipe created')
            setInput({
                name:"",
                summary:'',
                score:'',
                instructions:'',
                image:'',
                diets:[]
            })
            history.push('/food/home')
    }
    
    
    
    return(
        <div className={style.home}>
            <div>
                <Link to='/food/home'> 
                <div className={style.boxBack}>
                    <span className={style.back}><img className={style.back} src={flecha} alt='Back'/></span>
                </div>
                </Link>
                <div className={style.container}>
                    <h1 className={style.title}>Create your recipe</h1>
                    <form onSubmit={()=>handlerSubmit()}  >
                        <div className={style.form}>
                            <div className={style.formName}>
                                <label >Nombre:*</label>
                                {errors.name && (<p className={style.errors}>{errors.name}</p>)}
                            </div>
                            <input
                            className={errors.name? style.validation : style.formInput}
                            name='name'
                            value={input.value}
                            type='text'
                            onChange={(e)=>handlerInputChange(e)}
                            />
                        </div>
                        <div className={style.form} >
                            <div className={style.formName}>
                                <label >Summary:*</label>
                                {errors.summary && (<p className={style.errors}>{errors.summary}</p>)}
                            </div>
                            <textarea
                            className={errors.name? style.validation : style.inputTextarea}
                            name='summary'
                            value={input.summary}
                            type='text'
                            onChange={(e)=>handlerInputChange(e)}
                            />
                        </div>
                        <div className={style.form}>
                            <label className={style.formName}>Score:</label>
                            <input
                            className={style.formInput}
                            name='score'
                            value={input.score}
                            type='text'
                            onChange={(e)=>handlerInputChange(e)}
                            />
                        </div>
                        <div className={style.form}>
                            <label className={style.formName}>Image:</label>
                            <input
                            className={style.formInput}
                            name='image'
                            value={input.image}
                            type='text'
                            onChange={(e)=>handlerInputChange(e)}
                            />
                        </div>
                        <div className={style.form}>
                            <label className={style.formName}>Instructions:</label>
                            <textarea
                            className={style.inputTextarea}
                            name='instructions'
                            value={input.instructions}
                            type='text'
                            onChange={(e)=>handlerInputChange(e)}
                            />
                        </div>
                    
                        <div >
                            <div className={style.formDiet}>
                                <label >Select Diets:*</label>
                                {input.diets <= 0 && (<p  className={style.errors}>Oligatory Field</p>)}  
                            </div>   
                            <br/> 
                            <div className={style.check}>
                                <div className={input.diets< 1 && style.validationCheck}> 
                                    {
                                        diets &&
                                        diets.map(diet=>(
                                            <label className={style.selectDiets}>
                                                <input 
                                                name="diets"
                                                type='checkbox'  
                                                value={diet.title}
                                                onChange={(e)=>handlerCheckbox(e)}/>
                                                {diet.title}
                                            </label>
                                        ))
                                    }  
                                </div>   
                            </div>                 
                        </div>
                        <p className={style.field}>* Obligatory field</p>
                        {!errors.name && !errors.summary && input.diets.length && (<button className={style.button} type='submit'>Create Recipe</button>)}
                    </form>
                </div>
            </div>
        </div>
    )
    
}


export default RecipeCreator;

