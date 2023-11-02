import {Card} from './../componenets'
import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

export const Search = ({path_url}) => {
  let {query} = useParams()
  const {data : movie}  = useFetch(path_url,query)

  return (
    <main>
    <section className='py-7'>
      <p className='text-3xl text-gray-700 dark:text-white'>{movie.length ===0 ? "No Result Found : "+query:" Result For :"+query}</p>
    </section>

      <main className='flex flex-wrap justify-center'>
          {
            movie.map((movie)=>{
                      return <Card key={movie.id} movie={movie}/>
              })
          }
      </main>
    </main>
  )
}
