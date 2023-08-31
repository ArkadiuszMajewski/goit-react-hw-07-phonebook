import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { getContacts, getFilter } from '../../Redux/selector';
import Contact from 'components/contacts/contacts';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    if (filter === '') {
      return contacts;
    } else
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      {filteredContacts.length !== 0 ? (
        <ul className={css.list}>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts found</p>
      )}
    </div>
  );
};

export default ContactList;
