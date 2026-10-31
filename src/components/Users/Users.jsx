import './Users.css';
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Paginador from '../Paginador/Paginador'
const Users = () => {
  const [page, setPage] = useState(1);
  const [characters , setCharacters] = useState([]);
  
//si un await tiene que haber afuera un stringify
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
      <h1>Gestion de usarios</h1>
      {
       characters.map((character) =>{
          return (
             <Card character={character}/>
          
          );
       })
      }
      <Paginador></Paginador>
    </div>
  );
};

export default Users;