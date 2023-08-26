import { combineReducers } from 'redux';
import { statusFilter } from './redux/const';

const contactInisials = [
  {
    id: 0,
    name: 'Arek',
    number: '432354423',
    favorite: false,
  },
];

const constantReducer = (state = contactInisials, action) => {
  switch (action.type) {
    case 'contacts/ADD':
      return [...state, action.payload];
    case 'contacts/DELETE':
      return state.filter(contact => contact.id !== action.payload);
    case 'contacts/FAVORITE':
      return state.map(contact => {
        if (contact.id !== action.payload) {
          return contact;
        }
        return { ...contact, favorite: !contact.favorite };
      });

    default:
      return state;
  }
};

const filtersInitial = {
  status: statusFilter,
};
const filtersReducer = (state = filtersInitial, action) => {
  switch (action.type) {
    case 'filters/SET':
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

export const rootReducers = combineReducers({
  contacts: constantReducer,
  // filters: '',
});
