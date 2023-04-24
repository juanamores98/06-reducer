import React, { useEffect, useReducer, useState } from 'react';
import TablaContactos from './TablaContactos';
import AgregarContacto from './AgregarContacto';
import { ContactosReducer } from '../reducers/ContactosReducer';
/*const contactos = [
  {
    id: '1',
    nombre: 'Juan',
    numero: '8585-6565',
  },
  {
    id: '2',
    nombre: 'Gerardo',
    numero: '8585-6565',
  },
  {
    id: '3',
    nombre: 'Pedro',
    numero: '8585-6565',
  },
];*/

const init = () => {
  return JSON.parse(localStorage.getItem('contactos')) || [];
};

const Contactos = () => {
  const [state, dispatch] = useReducer(ContactosReducer, [], init);

  useEffect(() => {
    localStorage.setItem('contactos', JSON.stringify(state));
  }, [state]);

  const [formView, setFormView] = useState(false);

  return (
    <div className='Container mt-3 mx-5'>
      <button
        className='btn btn-info mb-2'
        onClick={() => setFormView(!formView)}
      >
        {formView ? 'Cerrar Formulario' : 'Abrir Formulario'}
      </button>
      <div className='row'>
        <div className='col-8'>
          <TablaContactos contactos={state} dispatch={dispatch} />
        </div>
        <div className='col'>
          {formView && <AgregarContacto dispatch={dispatch} />}
        </div>
      </div>
    </div>
  );
};

export default Contactos;
