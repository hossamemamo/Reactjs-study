import { useState } from "react";
import CatShow from "./CatShow";
import './App.css';


function getCat(){
    const cats=['crycat','dablooncat','eatingCat','hambola','loopCat','orangecat'];

    return cats[Math.floor(Math.random()*cats.length)]
}

function App(){

    const [cats,setCats]=useState([]);

                    //function(){} is the same as below
    const handleClick = ()=>{
        setCats([...cats,getCat()]);
    };


    const renderCats = cats.map((cat,index)=>{
        return <CatShow type={cat} key={index} />;
    })


    return <div className="app">
        <button onClick={handleClick}>Add Cat</button>
        <div className="cat-list">{renderCats}</div>
    </div>
}

export default App;