import './Alert.css';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

//recibe props: mostrar, mensaje, confirmar,  cancelar
const Alert =({show, message, confirm, cancel }) => {
  
  return (
    <Modal show={show} onHide={cancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar eliminación</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {message}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={cancel}>
          Cancelar
        </Button>

        <Button variant="danger" onClick={confirm}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Alert;