import MovieCard from "./components/MovieCard"
import Carousel from "./components/Carousel"
import { getTrendingMovies, getTrendingShows } from "../../utils/movieapifunctions"
import { useEffect, useState } from "react"
import { Heading } from "@chakra-ui/react"

export default function Home({token}) {

  console.log(token)

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
      {token? <Heading color={'red'}>Welcome {token.user.user_metadata.first_name}</Heading>:null}
      <h2 className="my-4 text-xl font-bold">Trending Movies:</h2>
      <Carousel cards={trendingMovieCards}/>
      <h2 className="my-4 text-xl font-bold">Trending Shows:</h2>
      <Carousel cards={trendingTVCards}/>
    </div>
    // <p>Worked!</p>
  );
}