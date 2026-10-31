import './Baneos.css';
import React from 'react'
import Paginador from '../Paginador/Paginador'
import Tablas from '../Tablas/Tablas'
import Boton from '../Button/Button'

const Baneos = () => {
  return (
    <div className="usuarios">
      <div className="usuarios-encabezado">
        <h2>Administración de Baneos</h2>
        <Boton texto="Crear Baneos" tipo="crear" />
    </div>
    <Tablas></Tablas>
    <Paginador></Paginador>
    </div>
    
  )
}           

export default Baneos