import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/action';
import { selectError, selectIsLoading } from 'Redux/selector';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.container}>
      <h1>Contact Info</h1>
      <ContactForm />
      <h1>Search Contacts</h1>
      <Filter />
      <h1>Contact List</h1>
      <ContactList />
      {isLoading ? <p> Loading Data</p> : <p>{error}</p>}
    </div>
  );
};
