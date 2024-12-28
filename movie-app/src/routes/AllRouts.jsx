import { Route, Routes} from "react-router-dom"
import {MovieList} from '../pages';

const AllRouts = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<MovieList title="your guide to Great Movies"apiPath="movie/now_playing"/>}/>
            <Route path="movies/popular" element={<MovieList title="Popular Movies" apiPath="movie/popular"/>}/>
            <Route path="movies/top" element={<MovieList title="Top Rated Movies" apiPath="movie/top_rated"/>}/>
            <Route path="movies/upcomming" element={<MovieList title="Upcoming Movies" apiPath="movie/upcoming"/>}/>
        </Routes>
    
    </>
  )
}

export default AllRouts
