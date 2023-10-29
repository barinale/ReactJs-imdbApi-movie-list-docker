import React, { useEffect, useState } from 'react'

export const useFetch = (path) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOThhMzIxODFlMDAxZjE5ZGY3MTcwMjBlYmE0MGVkMiIsInN1YiI6IjY1MzY3NGJjNDJkODM3MDBlYWM2Yzc4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L9GGSNBAs2psORcKLTEzu1JO-0dUOq2i7y_LWcED0iI'
        }
      };
      
    const [data,setData] = useState([])
    const url = `https://api.themoviedb.org/3/${path}`
    useEffect(()=>{
  
        async function fetchMovie(){
        fetch(url, options)
        .then(response => response.json())
        .then(response => setData(response.results))
        .catch(err => console.error(err));
        }
        fetchMovie()
      
      },[url])
  return (
    <div>useFetch</div>
  )
}
