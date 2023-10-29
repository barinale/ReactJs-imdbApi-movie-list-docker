import { useEffect, useState } from 'react';
import {Card} from './../componenets'
import { useFetch } from '../hooks/useFetch';

export const MovieList = ({path_url}) => {
const {data}  = useFetch(path_url)
  const movie = [];
  return (
    <main className='flex flex-wrap justify-center'>
    {movie.map((movie)=>{
      return <Card key={movie.id} movie={movie}/>
    })}
    </main>
  )
}
