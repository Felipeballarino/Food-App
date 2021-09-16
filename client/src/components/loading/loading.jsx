import React from 'react'
import style from './loading.module.css'




const Loading = () =>{

    return (
        <div className={style.container}>
            <div className={style.loading}>
                <h1>Loading...</h1>  
            </div>
        </div>
    )
}

export default Loading;