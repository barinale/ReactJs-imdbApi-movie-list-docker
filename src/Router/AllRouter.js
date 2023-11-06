import {Routes,Route} from 'react-router-dom'

import { MovieDetail,MovieList,Search,PageNotFound } from '../pages'

export const AllRouter = () => {


  return (
    <div className='h-auto px-4' >
        <Routes>    
            <Route path="" element={<MovieList path_url="discover/movie?include_adult=false&include_video=false&language=en-US&page=1" title="Home" />} />
            <Route path="movies/:id" element={<MovieDetail  path_url="movie/" />} />
            <Route path="movies/popular" element={<MovieList  path_url="movie/popular?language=en-US&page=1" title="Popular"/>} />
            <Route path="movies/top" element={<MovieList path_url="movie/top_rated?language=en-US&page=1" title="Top"/>} />
            
            <Route path="movies/upcoming" element={<MovieList path_url="movie/upcoming?language=en-US&page=1" title="UpComing"/>} />
            <Route path="search/:query" element={<Search path_url="search/movie"/>}  />
            <Route path="*" element={<PageNotFound/>} title="Page Not Found"/>
        </Routes>
    </div>
  )
}
