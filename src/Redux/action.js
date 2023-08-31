import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = ' https://64ec9344f9b2b70f2bfa94f7.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/FETCH_ALL',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      // console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/ADD_CONTACT',
  async ({ name, number }, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', { name, number });
      // console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/DELETE_CONTACT',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
