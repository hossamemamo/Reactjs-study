import { useState } from "react";
import './SearchBar.css';
function SearchBar ({onSubmit}){
    const [term,setTerm]=useState('');

    const handleFormSubmit=(event)=>{
        event.preventDefault(); //prevents submission (not the usual for a forum)
        onSubmit(term)
    };


    const handleChange=(event)=>{
        setTerm(event.target.value);
    }
    return <div className="search-bar"> 
        <form onSubmit={handleFormSubmit}>
            <label>Search Anime</label>
            <input value={term} onChange={handleChange}/>
        </form>
    </div>;
}
export default SearchBar;
