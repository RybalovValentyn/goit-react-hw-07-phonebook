import { createAction } from "@reduxjs/toolkit";

//pending
export const getContactsRequest = createAction('getcontacts/request');

//resolve
export const getContactsSuccess = createAction('getcontacts/success')

//reject
export const getContactsReject = createAction('getcontacts/reject', (error)=>({
    payload: {
        message: error,
     }
}));

export const deletedContactRequest = createAction('deletecontact/request');

export const deletedContactSuccess= createAction('deletecontact/success', function deleted(id) {
    return {payload:{
        id: id
    }}
} );

export const deletedContactError = createAction('deletecontact/error', (error) => ({
    payload: {
       message: error
    }
}));

export const addContactRequest = createAction('phone/addcontact');

export const addContactSuccess = createAction('Contacts/addContactSuccess',
function Prepares(data ) {
    console.log(data);
    return {
        payload: {
            id: data.id,
            name: data.name,
            phone: data.phone
        }
    }

});
export const addContactError = createAction('Contacts/addContactError', (error) => ({
    payload: {
        message: error
    }
}));

export const filteredContactRequest = createAction('filtered/request', (searchValue) =>({
    payload:{
       filter: searchValue
    }
}));

export const filteredContactSuccess = createAction('filtered/succes');
export const filteredContactError = createAction('filtered/error', (error) => ({
    payload: {
        message: error
    }
}));

export const filtered = createAction('phone/filtered')


