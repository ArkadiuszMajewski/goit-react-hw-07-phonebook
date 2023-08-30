import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/contactsSlice';
import { useState } from 'react';
import { getContacts } from '../../Redux/selector';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = event => {
    if (event.currentTarget.id === '1') {
      setName(event.currentTarget.value);
    }
    if (event.currentTarget.id === '2') {
      setNumber(event.currentTarget.value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    let newContactAdded = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (newContactAdded) {
      alert(`already in contacts`);
      return contacts;
    } else {
      dispatch(addContact(name, number));
      setName('');
      setNumber('');
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        id="1"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+((['\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        value={name.trim()}
        placeholder="Name"
        onChange={handleChange}
      />
      <label>Number</label>
      <input
        id="2"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        required
        value={number.trim()}
        placeholder="Number"
        onChange={handleChange}
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
