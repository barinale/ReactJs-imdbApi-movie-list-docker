import {Routes,Route} from 'react-router-dom'

import { MovieDetail,MovieList,Search,PageNotFound } from '../pages'

export const AllRouter = () => {
  return (
    <div >
        <Routes>    
            <Route path="" element={<MovieList />} />
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
