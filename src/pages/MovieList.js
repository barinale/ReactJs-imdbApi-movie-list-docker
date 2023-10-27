import { useEffect, useState } from 'react';
import {Card} from './../componenets'

export const MovieList = () => {
const [movie,setMovie] = useState([])
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOThhMzIxODFlMDAxZjE5ZGY3MTcwMjBlYmE0MGVkMiIsInN1YiI6IjY1MzY3NGJjNDJkODM3MDBlYWM2Yzc4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L9GGSNBAs2psORcKLTEzu1JO-0dUOq2i7y_LWcED0iI'
  }
};

useEffect(()=>{
  
  async function fetchMovie(){
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  .then(response => response.json())
  .then(response => setMovie(response.results))
  .catch(err => console.error(err));
  }
  fetchMovie()

},[])

  return (
    <main className='flex flex-wrap'>
    {movie.map((movie)=>{
      return <Card movie={movie}/>
    })}
    </main>
  )
}
