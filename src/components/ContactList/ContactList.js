import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selector';
import { Contact } from '../contact/contact';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  // console.log(contacts.map((contact) => contact.number
  // console.log(contacts);
  return (
    <div>
      Contacts list
      <ul>
        {contacts.map(contact => {
          return <Contact key={contact.id} contact={contact} />;
        })}
      </ul>
    </div>
  );
};
