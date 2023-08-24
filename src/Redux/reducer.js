import { createReducer } from '@reduxjs/toolkit';
import { addContact } from './action';

const contactsInitials = [
  { id: 1, contacts: 'Arek', filter: 'filtr' },
  { id: 2, contacts: 'Kuba', filter: 'filtr' },
];

export const contactReducer = createReducer(contactsInitials, {
  [addContact]: (state, action) => {},
});
