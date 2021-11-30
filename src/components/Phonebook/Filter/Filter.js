import React from 'react';
import s from './filter.module.css'
import { connect } from 'react-redux';
import {filteredContact} from '../../Redux/operation-phone';
import { useState } from 'react';
import * as getAsyncData from '../../Redux/operation-phone'

const Filter = function ({ text, onChange, onBlur }){
const [filter, setfilter] = useState('')
const handleChange = event =>{
  setfilter(event.target.value)
  onChange(event)
}
// const onBlurHandle = (event) =>{
//   console.log('sdcsdc');
//   setfilter('')
//   onChange(event)
//   onBlur(filter)
// }
return(

  <label className={s.labelInpt}>
    Фильтр по имени
    <input className={s.input} type="text" value={filter}
    onChange={handleChange}
    //  onChange={(event)=>onChange(event)} 
    // onBlur={onBlurHandle}
  />
  </label>
  )
}


const mapStateToProps = (state) =>({
    text: state.contacts.filter
})

const mapDispatchToProps = dispatch => {                      //отправляем методы обработки 
  return {
    onChange: (event)=> dispatch(filteredContact(event.target.value)),       //привязали действие|/передали ивент
    // onBlur: (filter) => dispatch(getAsyncData.getAsyncData(filter)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Filter)