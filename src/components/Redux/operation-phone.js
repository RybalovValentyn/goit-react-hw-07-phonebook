// import * as action from './actions-search';
import * as fetcContacts from '../servises/API-servis';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as action from './action-phone'

axios.defaults.baseURL = 'https://61a37875d5e833001729203a.mockapi.io'


export const getAsyncData = createAsyncThunk('getcontacts', async (searchValue, {rejectWithValue}) =>{
    try { const Data = await fetcContacts.fetchHomeContacts(searchValue)
    console.log(Data);
    return Data
        
    } catch (error) {
      return  rejectWithValue(error)
         }
})

export const addContact = ( name, number) => dispatch => {
    console.log(name, number);
    const contact = {
        name: name,
        phone: number
    };
  
    dispatch(action.addContactRequest());
  
    axios
      .post('/contacts', contact)
      .then(({ data }) =>{ 
        console.log(data);  
        dispatch(action.addContactSuccess(data))})
      .catch(error => dispatch(action.addContactError(error)));
  };

  export const deletedContact = (id) => dispatch => {
    // console.log(id);
    dispatch(action.deletedContactRequest());
  
    axios
      .delete(`/contacts/${id}`)
      .then(() => dispatch(action.deletedContactSuccess(id)))
      .catch(error => dispatch(action.deletedContactError(error)));
  };

//   export const filteredContact = (searchValue) =>dispatch => {
//       dispatch(action.filteredContactRequest());
//       axios
//       .get(`/contacts?search=${searchValue}`)
//       .then(({ data }) => {
//           console.log(data);
//        dispatch(action.filteredContactSuccess(data))})
//       .catch(error => dispatch(action.filteredContactError(error)));
//   }

  export const filteredContact = createAsyncThunk('getcontacts', async (searchValue, {rejectWithValue}) =>{
    try { const filterData = await  axios.get(`/contacts?search=${searchValue}`)
    console.log(filterData);
    return filterData.data
        
    } catch (error) {
      return  rejectWithValue(error)
         }
})