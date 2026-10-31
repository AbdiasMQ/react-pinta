import './Users.css';
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
const Users = () => {
  const [page, setPage] = useState(1);
  const [characters , setCharacters] = useState([]);
  

  const fechtRickandmorty = async () => {
    let response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    let json = await response.json();

    setCharacters(json.results);

    console.log(JSON.stringify(json));
  };

  useEffect(() => {
    fechtRickandmorty();
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className='users'>
      <h1>Users</h1>
      <button onClick={nextPage}>Siguiente</button>
      {
       characters.map((character) =>{
          return (
             <Card character={character}/>
          
          );
       })
      }
    </div>
  );
};

export default Users;