import React from 'react'
import PersonCard from './PersonCard'

const PersonList = ({persons,handleDlete}) => {
  return (
    <div>
 {
 persons.map((per,i)=><PersonCard per={per}key={i} handleDlete={handleDlete} ></PersonCard>) 
 }
    </div>
  )
}
export default PersonList