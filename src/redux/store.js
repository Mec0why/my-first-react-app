import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';
import { strContains } from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchPhrase }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchPhrase)
  );

export const getAllColumns = (state) => state.columns;

export const getAllLists = (state) => state.lists;

export const getFavoriteCards = ({ cards }) =>
  cards.filter((card) => card.isFavorite);

export const getSearchPhrase = (state) => state.searchPhrase;

export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);

export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);

// action creators
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });

export const addCard = (payload) => ({ type: 'ADD_CARD', payload });

export const filterCard = (payload) => ({ type: 'FILTER_CARD', payload });

export const addList = (payload) => ({ type: 'ADD_LIST', payload });

export const toggleCardFavorite = (payload) => ({
  type: 'TOGGLE_CARD_FAVORITE',
  payload,
});

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchPhrase: searchStringReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
