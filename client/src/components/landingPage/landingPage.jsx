import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = ()=>{
    return(
        <div>
            <h2>Food App</h2>
            <div> 
                <Link to ='/food/home'>
                    <button>Ingresar</button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;