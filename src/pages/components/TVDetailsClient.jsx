import { useState, useEffect } from "react"
import { getTVDetails } from "../../../utils/movieapifunctions"

function DetailsTV({id}){
    const [details, setDetails] = useState({
        first_air_date:'test-test',
        genres:[
            {
                id: 1,
                name: 'test'
            }
        ]
    })
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        async function getDetails(id){
            const results = await getTVDetails(id)
            setDetails(results)
        }
        getDetails(id)
        setLoading(false)
    }
    )

    
    if(loading){
        return <p>Loading...</p>
    }else{
        const {name, first_air_date, number_of_seasons, homepage, genres, overview, poster_path, tagline, number_of_episodes, credits, videos} = details
        const release = first_air_date.split('-')
        // const release = first_air_date
        const genreElements = genres.map((genre)=>{
            return(
                <div key={genre.id} className="border rounded-md px-1 m-1">{genre.name}</div>
            )
        })
        return(
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl w-full font-bold p-3 pb-1">{name}</h1>
                <h3 className="w-full px-3">{tagline}</h3>
                <h4 className="font-light text-sm p-2 w-full text-gray-400">Seasons: {number_of_seasons} | Episodes: {number_of_episodes}</h4>
                <h4 className="font-light text-sm p-2 w-full text-gray-400">First Air Date: {parseInt(release[1])}/{parseInt(release[2])}/{release[0]}</h4>
                <div className="flex justify-center">
                    <img className="w-80" src={`https://image.tmdb.org/t/p/w342${poster_path}`}/>
                </div>
                <div className="flex">
                    {genreElements}
                </div>
    
                <h3 className="font-bold text-xl" >Description:</h3>
                <p className="mx-5 text-left">{overview}</p>
            </div>
        )
    }
}

export default DetailsTV