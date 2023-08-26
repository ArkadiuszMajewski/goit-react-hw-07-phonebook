import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/action';

export const ContactForm = () => {
  const dispatch = useDispatch();

  // const reset = {
  //   name: "",
  //   number: ""
  // };

  const [contact, setContact] = useState({
    name: '',
    number: '',
  });
  const handleSubmit = event => {
    event.preventDefault();
    // console.log(contact);
    const form = event.target;
    form.reset();

    dispatch(addContact(contact.name, contact.number));
  };

  const handleInput = event => {
    setContact(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
    // console.log(event);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        // value={contact}
        onChange={handleInput}
      />
      <input
        type="number"
        name="number"
        placeholder="number"
        // value={contact}
        onChange={handleInput}
      />
      <button type="submit"> Add contacts </button>
    </form>
  );
};
