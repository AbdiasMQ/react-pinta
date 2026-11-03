import './Bans.css';
import React, { useState, useEffect } from 'react';
import Pagination from '../Paginations/Paginations';
import Tables from '../Tables/Tables';
import Button from '../Button/Button';
import Alert from '../Alert/Alert';

const Bans = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [mostrarAlert, setMostrarAlert] = useState(false);
  const [idAEliminar, setIdAEliminar] = useState(null);

  const columnasBaneos = [
    { name: 'id', label: 'ID' },
    { name: 'name', label: 'Nombre de usuario' },
    { name: 'status', label: 'Motivo' },
    { name: 'species', label: 'Fecha de inicio' },
    { name: 'gender', label: 'Fecha de finalización' }
  ];
// Guardar el ID y mostrar el modal
  const onEliminar = (id) => {
    setIdAEliminar(id);
    setMostrarAlert(true);
  };

  // Confirmar eliminación
  const confirmarEliminacion = () => {
    setCharacters((prev) =>
      prev.filter((personaje) => personaje.id !== idAEliminar)
    );

    setMostrarAlert(false);
    setIdAEliminar(null);
  };

  const onVer = (personaje) => {
    console.log('Ver personaje:', personaje);
  };

  const onEditar = (personaje) => {
    console.log('Editar personaje:', personaje);
  };

  // Obtener personajes de Rick and Morty
  const fechtRickandmorty = async () => {
    let response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );

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
    <div className="usuarios">

      <div className="usuarios-encabezado">
        <h2>Administración de Baneos</h2>
        <Button text="Crear Baneos" type="create" />
      </div>

      {/* Modal de confirmación */}
      <Alert
        show={mostrarAlert}
        message={`¿Eliminar a ${characters.find(p => p.id === idAEliminar)?.name}?`}
        confirm={confirmarEliminacion}
        cancel={() => {
          setMostrarAlert(false);
          setIdAEliminar(null);
        }}
      />  

      {/* Tabla */}
      <Tables
          data={characters}
          columns={columnasBaneos}
          onView={onVer}
          onEdit={onEditar}
          onDelete={onEliminar}
      />

      {/* Paginador */}
      <Pagination
        page={page}
        setPage={setPage}
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
      />

    </div>
  );
};

export default Bans;
