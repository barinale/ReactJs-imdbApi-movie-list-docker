import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import imageNotFound from './../assets/no_image_available.jpeg'

 export const MovieDetail = ({path_url}) => {
   let { id } = useParams()
   
const {data : movie}  =  useFetch(path_url+id)
const image = movie.backdrop_path ? "https://image.tmdb.org/t/p/original/"+movie.poster_path : imageNotFound;
console.log(movie)
return (
    <main className="">
      <section className='flex justify-center flex-wrap py-5'>
        <div className='basis-1/4  bg-slate-500 '>
          <img src={image} className='rounded' width="200" height="200"/>
        </div>
        <div className='basis-1/2 bg-slate-300 '>
          <h1>Name</h1>
          <p>lorem lorem loreml omrelore</p>
          <ul>
            <li></li>
          </ul>

        </div>
      </section>
    </main>
  )
}
