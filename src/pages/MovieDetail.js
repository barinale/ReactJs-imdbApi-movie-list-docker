import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

 export const MovieDetail = ({path_url}) => {
   let { id } = useParams()
const {data : movie}  =  useFetch(path_url+id)

console.log(movie)
return (
    <main className="">
      <section className='flex md:flex-row flex-col'>
        <div className='basis-1/4  bg-slate-500 '>
          <img src="" width="200" height="200"/>
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
