import { useEffect, useState } from 'react';
import {Card} from './../componenets'
import { useFetch } from '../hooks/useFetch';

export const MovieList = ({path_url}) => {
const {data : movie}  = useFetch(path_url)
  return (
    <main className='flex flex-wrap justify-center'>
    { 
      movie.map((movie)=>{
      return <Card key={movie.id} movie={movie}/>
     })
    }
    </main>
  )
}
