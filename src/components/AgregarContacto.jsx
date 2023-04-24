import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const AgregarContacto = ({ dispatch }) => {
  const [data, setData] = useState({ nombre: '', numero: '' });

  const { nombre, numero } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const actionAgregarContacto = {
    type: 'agregar',
    payload: {
      id: uuid(),
      nombre,
      numero,
    },
  };
  const handleAgregarContacto = () => {
    dispatch(actionAgregarContacto);
  };
  return (
    <>
      <div className='card d-grid gap-2 p-2'>
        <h1>Agregar Contacto</h1>
        <label className='mx-1'>
          Nombre:
          <input
            onChange={handleChange}
            name='nombre'
            type='text'
            value={nombre}
            className='form-control'
            autoComplete='off'
          />
        </label>
        <label className='mx-1 '>
          Numero:
          <input
            onChange={handleChange}
            name='numero'
            type='text'
            value={numero}
            className='form-control'
            autoComplete='off'
          />
        </label>
        <div className='mx-1 d-grid'>
          <button onClick={handleAgregarContacto} className='btn btn-info'>
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};

export default AgregarContacto;
