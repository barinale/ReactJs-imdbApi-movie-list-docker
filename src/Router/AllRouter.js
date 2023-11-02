import {Routes,Route, useParams} from 'react-router-dom'

import { MovieDetail,MovieList,Search,PageNotFound } from '../pages'

export const AllRouter = () => {


  return (
    <div >
        <Routes>    
            <Route path="" element={<MovieList path_url="discover/movie?include_adult=false&include_video=false&language=en-US&page=1"/>} />
            <Route path="movies/:id" element={<MovieDetail  path_url="movie/"/>} />
            <Route path="movies/popular" element={<MovieList  path_url="movie/popular?language=en-US&page=1"/>} />
            <Route path="movies/top" element={<MovieList path_url="movie/top_rated?language=en-US&page=1"/>} />
            
            <Route path="movies/upcoming" element={<MovieList path_url="movie/upcoming?language=en-US&page=1"/>} />
            <Route path="search/:query" element={<Search path_url="search/movie"/>} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </div>
  )
}
