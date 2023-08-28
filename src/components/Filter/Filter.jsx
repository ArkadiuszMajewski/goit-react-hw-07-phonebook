import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setFilter } from 'Redux/filterSlice';

const Filter = () => {
  const [filtr, setFiltr] = useState('');
  const dispatch = useDispatch(setFilter);
  const onChange = event => {
    setFiltr(event.currentTarget.value);
    // console.log(event.target.value);
    dispatch(setFilter(event.currentTarget.value));
  };
  return (
    <label>
      Find contacts by name:
      <input type="text" name="name" onChange={onChange} value={filtr.trim()} />
    </label>
  );
};

export default Filter;
