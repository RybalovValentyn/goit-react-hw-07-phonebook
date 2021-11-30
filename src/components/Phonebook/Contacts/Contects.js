import React from "react";
import s from './contacts.module.css'
import { connect } from 'react-redux';
import * as action from '../../Redux/action-phone'
import {deletedContact} from '../../Redux/operation-phone'

function Contacts({contacts, onDeleteContact}) {
// console.log(contacts);
       return (

        <ul className={s.contactsList}>
            {contacts.map(contact=>
               <li key={contact.id}>
                   <span className={s.contactText}>{contact.name}: {contact.phone}</span>
                   <button type='button' onClick={() => onDeleteContact(contact.id)}>Delete</button>
               </li> )}
        </ul>
    )
}

const mapStateToProps = state =>{   
                //фильтрация перед рендером, раньше передавали пропами сейчас фильтруэм прямо при получениии из стейта
    const {contacts} = state.contacts.contact;
    // const {filter} = state.contacts.filter
    // const normalizedFilter = filter.toLowerCase();

    // const visibleContact = contact.filter(({name}) => name.toLowerCase().includes(normalizedFilter));
    // return{ contacts: visibleContact}
    return {contacts}
}

const mapDispatchToProps = dispatch => {                      //отправляем методы обработки 
    return {
        onDeleteContact: (id)=> dispatch(deletedContact(id)),       //привязали действие
        }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Contacts)