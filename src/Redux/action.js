import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  return {
    type: 'contacts/ADD',
    payload: {
      id: nanoid(),
      name,
      number,
      favorite: false,
    },
  };
};

export const deleteContact = id => {
  return {
    type: 'contacts/DELETE',
    payload: id,
  };
};
export const tooggleFavorite = id => {
  return {
    type: 'contacts/FAVORITE',
    payload: id,
  };
};
