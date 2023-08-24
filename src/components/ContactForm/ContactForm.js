import { addContact } from 'Redux/action';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log('handleSubmit');
    dispatch(addContact(name, number));
  };

  const handleChange = event => {
    switch (event.target.id) {
      case 'name':
        setName(event.target.value);
        // console.log(name);
        break;
      case 'number':
        setNumber(event.target.value);
      // console.log(number);
      default:
        break;
    }
    // if (event.target.id === 'name') {
    //   setName(event.target.value);
    //   console.log(name);
    // }
    // if (event.target.id === 'number') {
    //   setNumber(event.target.value);
    //   console.log(number);
    // }
  };
  const dispatch = useDispatch();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+((['\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          value={name}
          onChange={handleChange}
          id="name"
        />
        <label>Number</label>
        <input
          type="number"
          name="number"
          // pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          // required
          value={number}
          onChange={handleChange}
          id="number"
        />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};
