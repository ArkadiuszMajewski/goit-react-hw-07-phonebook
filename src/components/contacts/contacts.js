import { useDispatch } from 'react-redux';
import { deleteContact, tooggleFavorite } from '../../redux/action';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  const handleToggle = () => dispatch(tooggleFavorite(contact.id));

  return (
    <div>
      <input
        type="checkbox"
        checked={contact.favorite}
        onChange={handleToggle}
      />
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button onClick={handleDelete}>Remove</button>
    </div>
  );
};
