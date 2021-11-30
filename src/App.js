import Contacts from './components/Phonebook/Contacts/Contects'
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import {contacts} from '../src/components/Redux/selector'
import { getAsyncData} from '../src/components/Redux/operation-phone'
import PhoneForm from './components/Phonebook/Phone/Phonebook'
import Filter from './components/Phonebook/Filter/Filter'

function App() {
  const searchContacts = 'dvdv'
  const dispatch = useDispatch()
  const searchResults = useSelector(contacts);

  useEffect(() =>{
    if (!searchContacts.trim())  return;
    // dispatch(getData(searchContacts))
    dispatch(getAsyncData(searchContacts))
    }, [searchContacts])

  return (
    <div className="App">
      <PhoneForm />
      <Filter />
      <Contacts />
    </div>
  );
}

export default App;
