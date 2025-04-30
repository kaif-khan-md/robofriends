import React from "react";


const Card = (props)=>{
    const {id , name , email} = props;
    return(
        <div className="bg-light-blue dib br3 pa3 ma3 shadow-5 grow bw5">
            <img src={`https://robohash.org/${id}?200x200`} alt="not available"/>
            <h2>{name}</h2>
            <p > {email}</p>
        </div>
    );
}

export default Card;