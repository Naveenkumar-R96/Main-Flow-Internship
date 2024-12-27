import { Route, Routes} from "react-router-dom"
import {MovieList} from '../pages';

const AllRouts = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<MovieList title="your guide to Great Movies"/>}/>
            <Route path="movies/popular" element={<MovieList title="Popular Movies"/>}/>
            <Route path="movies/top" element={<MovieList title="Top Rated Movies"/>}/>
            <Route path="movies/upcomming" element={<MovieList title="Upcoming Movies"/>}/>
        </Routes>
    
    </>
  )
}

export default AllRouts
