import React from "react";



const SearchBox = ({searchChange}) =>{
    return (
        <div className="pa3">
        <input type="search" 
               placeholder="search robots" 
               className="pa3 ba b-- bg-lightest-blue"
               onChange={searchChange}
               />
        </div>
        
    );
}

export default SearchBox;