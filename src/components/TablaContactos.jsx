import React from 'react';

const TablaContactos = ({ contactos, dispatch }) => {
  const handleEliminarContacto = (id) => {
    const actionEliminarContacto = { type: 'delete', payload: id };
    dispatch(actionEliminarContacto);
  };

  return (
    <div>
      <table className='table table-striped table-hover table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Numero</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto) => {
            const { id, nombre, numero } = contacto;
            const finalId = contacto.id.split('-')[0];
            return (
              <tr key={id}>
                <th>{finalId}</th>
                <td>{nombre}</td>
                <td>{numero}</td>
                <td>
                  <button
                    onClick={() => handleEliminarContacto(id)}
                    className='btn btn-danger'
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TablaContactos;
