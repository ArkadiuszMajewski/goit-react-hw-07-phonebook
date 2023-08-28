import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <h1>Contact Info</h1>
      <ContactForm />
      <h1>Search Contacts</h1>
      <Filter />
      <h1>Contact List</h1>
      <ContactList />
    </div>
  );
};
