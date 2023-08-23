const { createAction, nanoid } = require('@reduxjs/toolkit');

export const addContact = createAction('contacts/ADD', (name, number) => {
  return {
    payload: {
      in: nanoid,
      name,
      number,
    },
  };
});
