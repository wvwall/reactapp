import React, { useState } from "react";
import "./App.css";

const  Form = (props) => {
 const [value, setValue] = useState();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === '') {
      return
    }
    props.submit(value)
    setValue('')
  }
  
  const onChangeText = (e) => {
   setValue(e.target.value)
  }


    return (
    <form onSubmit={handleSubmit}>
      <input className='input' type="text" value={value} placeholder='aggiungi todo' onChange={onChangeText}/>
    </form>
  );

  
}
export default Form;
