import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {getAsyncData, filteredContact} from './operation-phone';
import {addContactRequest, addContactSuccess, addContactError,
    deletedContactRequest, deletedContactSuccess, deletedContactError,
    filteredContactRequest, filteredContactSuccess, filteredContactError } from './action-phone'

// const contactReducer = createReducer([], {
//     'phone/addcontact': (state, action) => [...state, action.payload],
//     'phone/deletecontact': (state, action) =>
//      state.filter(contact => contact.id !== action.payload)
//   });
const  initialContact =   [
    {id: '1', name: 'Rosie Simpson', phone: '459-12-56'},
    {id: '2', name: 'Hermione Kline', phone: '443-89-12'},
    {id: '3', name: 'Eden Clements', phone: '645-17-79'},
    {id: '4', name: 'Annie Copeland', phone: '227-91-26'},
  ]


const loading = createReducer(false, {
    [getAsyncData.pending]: (_, action) => true,
    [getAsyncData.fulfilled]: (_, action) => false,
    [getAsyncData.rejected]: (_, action) => false,
    [addContactRequest]: (_, action) => true,
    [addContactSuccess]: (_, action) => false,
    [addContactError]: (_, action) => false,
    [deletedContactRequest]: (_, action) => true,
    [deletedContactSuccess]: (_, action) => false,
    [deletedContactError]: (_, action) => false,
    [filteredContact.pending]: (_, action) => true,
    [filteredContact.fulfilled]: (_, action) => false,
    [filteredContact.rejected]: (_, action) => false,
});

const contact = createReducer(initialContact, {
        [getAsyncData.fulfilled]: (state, action) => [...state, ...action.payload],  
 
        [addContactSuccess]: (state, action) => [action.payload, ...state],  
        [deletedContactSuccess]: (state, action) =>
        state.filter(contact => contact.id !== action.payload.id),
        [filteredContact.fulfilled]: (state, action) => [...action.payload],
        


});

const contactError = createReducer(null, {
    [getAsyncData.rejected]: (_, action) => action.payload.message,
    [addContactError]: (_, action) => action.payload.message,
    [deletedContactError]: (_, action) => console.log(action.payload.message),
})


const contactReducer = combineReducers({
    contacts: contact,
     loading: loading,
     error: contactError,
 });


const filterReducer = createReducer('', {
    'getfiltered/pending': (state,action) => action.meta.arg

} );


const contactsReduser = combineReducers({
contact: contactReducer,
filter: filterReducer,
})

export default contactsReduser


