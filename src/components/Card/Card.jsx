import React from "react";

const Card = ({character}) => {
  return (
    <div>
       <>
        <h2>{character.name}</h2>
        <p>{character.status} =={character.species}</p>
        </>    
        
    </div>
  )
}

export default Card
