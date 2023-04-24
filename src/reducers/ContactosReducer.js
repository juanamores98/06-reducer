export const ContactosReducer = (state, action) => {
  switch (action.type) {
    case 'agregar':
      return [...state, action.payload];
    case 'delete':
      return state.filter((contacto) => contacto.id !== action.payload);

    default:
      return state;
  }
};
