import Details from "@/pages/components/MovieDetails"
import { useRouter } from "next/router"

function MoviePage(){
    const router = useRouter()
    const id = router.query.id

    return(
        <>
            <Details id={id}  />
        </>
    )
}

export default MoviePage