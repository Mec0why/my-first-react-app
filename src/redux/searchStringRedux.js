// selectors
export const getSearchPhrase = (state) => state.searchPhrase;

// actions
const createActionName = (actionName) => `app/searchPhrase/${actionName}`;
const FILTER_CARD = createActionName('FILTER_CARD');

// action creators
export const filterCard = (payload) => ({ type: FILTER_CARD, payload });

const searchStringReducer = (statePart = '', action) => {
  switch (action.type) {
    case FILTER_CARD:
      return action.payload;
    default:
      return statePart;
  }
};

export default searchStringReducer;
