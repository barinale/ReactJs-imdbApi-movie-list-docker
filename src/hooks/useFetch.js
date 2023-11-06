import  { useEffect, useState } from 'react'

export const useFetch = (path,query="") => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_API_KEY
        }
      };
      
    const [data,setData] = useState([])
    const url = `https://api.themoviedb.org/3/${path}?query=${query}&include_adult=false&language=en-US`
    useEffect(()=>{

        async function fetchMovie(){
        fetch(url, options)
        .then(response => response.json())
        .then((response) =>{ 
          if(response.results){
            setData(response.results) 
          }else{
            setData(response)
          }
        }
          )
        .catch(err => console.error(err)); 
        }
        fetchMovie()
        
      
      },[url])
      
  return {data}
}
