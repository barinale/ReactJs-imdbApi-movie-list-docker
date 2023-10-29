import {Routes,Route} from 'react-router-dom'

import { MovieDetail,MovieList,Search,PageNotFound } from '../pages'

export const AllRouter = () => {
  return (
    <div >
        <Routes>    
            <Route path="" element={<MovieList path_url="discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"/>} />
            <Route path="movies/:id" element={<MovieDetail />} />
            <Route path="movies/popular" element={<MovieList />} />
            <Route path="movies/top" element={<MovieList />} />
            <Route path="movies/upcoming" element={<MovieList />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </div>
  )
}
