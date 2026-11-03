import './Users.css';
import React, { useState, useEffect } from 'react';
import Paginations from '../Paginations/Paginations';
import Tables from '../Tables/Tables';
import Alert from '../Alert/Alert';

const Users = () => {
  const [page, setPage] = useState(1);
  const [characters , setCharacters] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [mostrarAlert, setMostrarAlert] = useState(false);
  const [idAEliminar, setIdAEliminar] = useState(null);
  
  const columnasUsuarios = [
    { name: 'id', label: 'ID' },
    { name: 'name', label: 'Nombre de usuario' },
    { name: 'gender', label: 'Gmail' },
  ];


  const onEliminar = (id) => {
    setIdAEliminar(id);
    setMostrarAlert(true);
  }
  const confirmarEliminacion = () => {
    setCharacters((prev) =>
      prev.filter((personaje) => personaje.id !== idAEliminar)
    );
    setMostrarAlert(false);
    setIdAEliminar(null);
  };


  const fechtRickandmorty = async () => {
    let response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    let json = await response.json();
    setCharacters(json.results);
    setHasNextPage(json.info.next !== null);
    setHasPrevPage(json.info.prev !== null);
    console.log(JSON.stringify(json));

  };

  useEffect(() => {
    fechtRickandmorty();
  }, [page]);

  
  
  return (
    <div className='users'>
      <h1>Gestion de usarios</h1>
      <Tables 
      data={characters}
      columns={columnasUsuarios}
      onDelete={onEliminar}
    

      />

      <Alert
        show={mostrarAlert}
        message={`¿Estas seguro de que deseas eliminar a ${characters.find(p => p.id === idAEliminar)?.name}?`}
        confirm={confirmarEliminacion}
        cancel={() => {
          setMostrarAlert(false);
          setIdAEliminar(null);
        }}
      />

      <Paginations
        page={page}
        setPage={setPage}
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
      />
    </div> 
  );
};

export default Users;