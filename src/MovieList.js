import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({Movie,handleDlete}) => {
  return (
    <div className='movie'>
 {
 Movie.map((per,i)=><MovieCard per={per}key={i} handleDlete={handleDlete}  ></MovieCard>) 
 }
    </div>
  )
}
export default MovieList