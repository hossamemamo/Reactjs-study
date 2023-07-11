import crycat from './assets/Crying_Cat.jpg'
import dablooncat from './assets/dabloon.jpg'
import eatingCat from './assets/eatingCat.jpg'
import hambola from './assets/hambola.jpg'
import loopCat from './assets/loopCat.jpg'
import orangecat from './assets/orange.jpg'
import heart from './assets/heart.svg'

import './CatShow.css'

import { useState } from 'react'

const picMap ={
    crycat,
    dablooncat,
    eatingCat,
    hambola,
    loopCat,
    orangecat
};


function CatShow({type}){

    const [clicks,setClicks]=useState(0);

    const handleClick = ()=>{
        setClicks(clicks+1);

    }
    return <div className='cat-show' onClick={handleClick}>
        <img className='cat' alt="cat" src={picMap[type]}/>
        <img className='heart' alt="heart" src={heart} style={{width:10+10 * clicks}}/>
        </div>;
}

export default CatShow;