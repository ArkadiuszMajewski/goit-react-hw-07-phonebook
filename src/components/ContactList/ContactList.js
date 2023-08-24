import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contact);
  console.log(contacts);
  return <div>{contacts}</div>;
};
