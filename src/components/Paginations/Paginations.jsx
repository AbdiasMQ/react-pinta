import './Paginations.css';
import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const Paginador = ({ page, setPage, hasNextPage, hasPrevPage }) => {

  const nextPage = () => {
    if (hasNextPage) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (hasPrevPage) {
      setPage(page - 1);
    }
  };

  return (
    <Pagination className='Paginacion'>

      <Pagination.First
        onClick={() => setPage(1)}
        disabled={!hasPrevPage}
      />

      <Pagination.Prev
        onClick={prevPage}
        disabled={!hasPrevPage}
      />

      <Pagination.Item active>
        {page}
      </Pagination.Item>

      <Pagination.Next
        onClick={nextPage}
        disabled={!hasNextPage}
      />

    </Pagination>
  );
};

export default Paginador;