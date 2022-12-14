
import './App.css';
import { useState } from 'react';
import PersonList from './PersonList'; 
import AddPerson from './AddPerson';
function App() {

const [persons,setPersons]=useState([
  {fullName:'issam',age:21,image:"https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg",id:1},
  {fullName:'raja',age:19,image:"https://www.shareicon.net/data/512x512/2016/07/26/802031_user_512x512.png",id:2}

])
const handeleAdd=(newPerson)=>{
  setPersons([...persons,newPerson])
}
const handleDlete=(per)=>{
  setPersons( persons.filter(elm=>elm.id!==per.id))
}
  return (
    <div className="App">
    <header className="App-header">
    <AddPerson handeleAdd={handeleAdd}/>
    <br></br>
    <PersonList handleDlete={handleDlete} persons={persons}/>
    </header>
    </div>
  );
}

export default App;
