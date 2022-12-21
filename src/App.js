
import './App.css';
import { useState } from 'react';
import MovieList from './MovieList'; 
import AddMovie from './AddMovie';
import { v4 as uuidv4 } from 'uuid';
import Filter from './Filter'


function App() {
const[filter,setFilter]=useState("")
const [Movie,setMovie]=useState([
  
  {MovieName:'El Insa',
  Description:'ggggggggggggjkjlllllllläljklojoljoj',
  rating: 4,
  image:"https://assets.e-cinema.com/PICTURES/E01177-el-inca-nouvelle-affiche.jpg",
  id:uuidv4(),},
  {MovieName:'THE Northman',
  Description:'llllllllllllljuoihigujjjjjjjjjjjjjjj',
  rating: 3,
  image:"https://egy4.best/uploads/m/a4160e4f91d624ae929a49bccb92b5b9.jpg",
  id:uuidv4(),},
  {MovieName:'THE System',
  Description:'lkpkopljivggggggggffuzzvggggggggggggi',
  rating: 2,
  image:"https://egybestvip.com/uploads/m/9d68db10c146c7ed8751a4c9bc2e09cc.jpg",
  id:uuidv4(),},
  
])
const handeleAdd=(newMovie)=>{
  setMovie([...Movie,newMovie]);
}
const handleDlete=(per)=>{
  setMovie( Movie.filter(elm=>elm.id!==per.id))
}
const handelFilter=(val)=>{
  setFilter(val)
}
  return (
    <div className="App">
    <header className="App-header">
     <Filter handelFilter={handelFilter}/>
    <AddMovie handeleAdd={handeleAdd}/>
    <br></br>
  
    <MovieList handleDlete={handleDlete} Movie={Movie}/>
    
    </header>
    </div>
    
  );
}

export default App;
