import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import imageNotFound from './../assets/no_image_available.jpeg'
import { useTitle } from '../hooks/useTitle'
 export const MovieDetail = ({path_url}) => {
   let { id } = useParams()
   
const {data : movie}  =  useFetch(path_url+id)
const image = movie.backdrop_path ? "https://image.tmdb.org/t/p/original/"+movie.poster_path : imageNotFound;
const PageTitle= useTitle(movie.title)

return (
    <main className="">
      <section className='flex justify-center flex-wrap py-5 gap-6'>
        <div className='max-w-sm mr-6'>
          <img src={image} alt="Image_Movie" className='rounded' />
        </div>
        <div className='max-w-2xl text-gray-700 text-lg dark:text-white'>
          <h1 className='text-4xl font-bold my-3 text-center lg:text-left'>{movie.title}</h1>
          <p className='my-4'>{movie.overview}</p>
          <p className='my-7 flex flex-wrap gap-2 '>
          {movie.genres? movie.genres.map((genr)=>{
            return <span className='p-2 border rounded mr-2 dark:border-gray-600 ' key={genr.id}>{genr.name}</span>
          })  :'' }
          </p>
          
     
        <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-300 mr-1" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{movie.vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a href={`https://www.imdb.com/title/${movie.imdb_id}`} className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{movie.vote_count} reviews</a>
        </div>
         <p className='my-2'>
          <span className='font-bold pr-2'>Runtime :</span>
          <span className=''>{movie.runtime}</span>
         </p> 
         <p className='my-2'>
          <span className='font-bold pr-2'>Budget :</span>
          <span className=''>{movie.budget}</span>
         </p> 
         <p className='my-2'>
          <span className='font-bold pr-2'>Revenue :</span>
          <span className=''>{movie.revenue}</span>
         </p> 
         <p className='my-2'> 
          <span className='font-bold pr-2'>Release Date :</span>
          <span className=''>{movie.release_date}</span>
         </p> 
         <p className='my-2'>
          <span className='font-bold pr-2'>IMDB Code :</span>
          <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel='noreferrer' className=''>{movie.imdb_id}</a>
         </p> 


        </div>
      </section>
    </main>
  )
}
