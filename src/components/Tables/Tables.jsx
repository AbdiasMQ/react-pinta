import './Tables.css';
import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from '../Button/Button';

// recibe por props los datos, las columnas y las funciones de ver, editar y eliminar
const Tables = ({data, columns, onView, onEdit, onDelete}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.name}>{column.label}</th>
          ))}
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {data.map((dates, index) => (
          <tr key={dates.id}>
            {columns.map((column) => (
              <td key={column.name}>
                {dates[column.name]}
              </td>
            ))}

            <td>
              <Button
                text="Editar"
                type="edit"
                callback={() => onEdit(dates)}
              />

              <Button
                text="Eliminar"
                type="delete"
                callback={() => onDelete(dates.id)}
              />

              <Button
                text="Ver"
                type="show"
                callback={() => onView(dates)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Tables;
