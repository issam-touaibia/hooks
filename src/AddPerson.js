import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const AddPerson = ({handeleAdd}) => {
const [inputs,setInputs ]=useState({
    fullName:'',
     age:'',
     image:'',
     id:uuidv4()
})
const handlechange=(e)=>{
    setInputs({...inputs,[e.target.name]:e.target.value})
}
const addNewp=()=>{
   handeleAdd (inputs)
}
  return (
    <div>
   <input placeholder='fullName' name='fullName'onChange={handlechange}/>
   <input placeholder='age' name='age'onChange={handlechange}/>
   <input placeholder='image url'name='image'onChange={handlechange}/>
   <button onClick={addNewp}>submit</button>
    </div>
  )
}
export default AddPerson