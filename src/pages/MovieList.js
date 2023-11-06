import {Card} from './../componenets'
import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';

export const MovieList = ({path_url,title}) => {
const {data : movie}  = useFetch(path_url)
// eslint-disable-next-line
const PageTitle = useTitle(title)
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
