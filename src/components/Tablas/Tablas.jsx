import './Tablas.css'
import React from 'react'
import Table from 'react-bootstrap/Table';
import Boton from '../Button/Button'

function BasicExample() {
  return (
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre de usuario</th>
          <th>Motivo</th>
          <th>Fecha</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Marco </td>
          <td>spam</td>
          <td>30/33/34</td>
          <td>Activo</td>
          <td> 
            <Boton texto="Editar" tipo="editar" />
            <Boton texto="Eliminar" tipo="eliminar" />
            <Boton texto='Ver' tipo="ver" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicExample;

