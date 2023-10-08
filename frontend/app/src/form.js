import React, { useState } from 'react'
import axios from "axios"
export default function Form() {
  const [formData,setFormData] = useState({fname:"",lname:"",email:""})
  function changef(e){
       setFormData({...formData,fname:e.target.value})
  }
  function changel(e){
    setFormData({...formData,lname:e.target.value})
  }
  function email(e){
    setFormData({...formData,email:e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    axios.post('http://localhost:5011/adddata',{formData}).then((req)=>{console.log(req.body)})
    
  }
  console.log("pppp")
  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="fname">First name:</label>
    <input onChange={changef} type="text" id="fname" name="fname" /><br/>
    <label  htmlFor="lname">Last name:</label>
    <input onChange={changel} type="text" id="lname" name="lname" /><br/><br/>
    <label  htmlFor="email">email:</label>
    <input onChange={email} type="" id="email" name="email" /><br/><br/>
    <input type="submit" value="Submit"/>
    
    </form> 
  )
}
