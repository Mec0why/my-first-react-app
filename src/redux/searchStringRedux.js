const searchStringReducer = (statePart = '', action) => {
  switch (action.type) {
    case 'FILTER_CARD':
      return action.payload;
    default:
      return statePart;
  }
};

export default searchStringReducer;
