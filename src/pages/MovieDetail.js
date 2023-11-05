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
        <div className='max-w-sm '>
          <img src={image} className='rounded' />
        </div>
        <div className='max-w-2xl text-gray-700 text-lg dark:text-white'>
          <h1 className='text-4xl font-bold my-3 text-center lg:text-left'>{movie.title}</h1>
          <p className='my-4'>{movie.overview}</p>
          <p className='my-7 flex flex-wrap gap-2 '>
          {movie.genres? movie.genres.map((genr)=>{
            return <span className='p-2 border rounded mr-2 dark:border-gray-600 ' key={genr.id}>{genr.name}</span>
          })  :'' }
          </p>
         

         


        </div>
      </section>
    </main>
  )
}
