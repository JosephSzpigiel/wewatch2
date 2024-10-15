import MovieCard from "./components/MovieCard"
import Carousel from "./components/Carousel"
import { getTrendingMovies, getTrendingShows } from "../../utils/movieapifunctions"
import { useEffect, useState } from "react"

export default function Home() {

  // const options = {
  //   next: {revalidate: 86400},
  //   method: 'GET',
  //   headers: {
  //       accept: 'application/json',
  //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_KEY}`
  //   }
  // }

  // async function getTrendingMovies(){
  //   const res = await fetch('https://api.themoviedb.org/3/trending/movie/day', options)
  //   return res.json()
  // }

  // async function getTrendingShows(){
  //   const res = await fetch('https://api.themoviedb.org/3/trending/tv/day', options)
  //   return res.json()
  // }

  const [trendingMovies, setTrendingMovies] = useState({results:[]})
  const [trendingShows, setTrendingShows] = useState({results:[]})


  useEffect(()=>{
    async function setTrending() {
      const movies = await getTrendingMovies()
      console.log(movies)
      const tv = await getTrendingShows()
      console.log
      setTrendingMovies(movies)
      setTrendingShows(tv)
    }
    setTrending()
  }, [])

  console.log(trendingMovies)
  console.log(trendingShows)

  const trendingMovieCards = trendingMovies.results.map(movie=>{
    return (
      <MovieCard key={movie.id} movie={movie}/>
    )
  })

  const trendingTVCards = trendingShows.results.map(show=>{
    return (
      <MovieCard key={show.id} movie={show}/>
    )
  })


  return (
    <div>
      <h2 className="my-4 text-xl font-bold">Trending Movies:</h2>
      <Carousel cards={trendingMovieCards}/>
      <h2 className="my-4 text-xl font-bold">Trending Shows:</h2>
      <Carousel cards={trendingTVCards}/>
    </div>
    // <p>Worked!</p>
  );
}