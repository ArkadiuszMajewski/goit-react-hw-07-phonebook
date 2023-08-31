import { useDispatch } from 'react-redux';
import css from './contacts.module.css';
import { deleteContact } from 'Redux/action';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <div className={css.container}>
      <p>Name: {contact.name}</p>
      <p>Number: {contact.number}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
