import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addUpComingMovies } from "../utils/moviesSlice";


const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);

  const getUpComingMovies = async() => {
    const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addUpComingMovies(data.results));
    };
  
    useEffect(() => {
     !upComingMovies && getUpComingMovies();
    }, []);
}

export default useUpComingMovies