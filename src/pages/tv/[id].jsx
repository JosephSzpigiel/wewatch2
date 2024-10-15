import DetailsTV from "../components/TVDetailsClient"
import { useRouter } from "next/router"

function TVPage({params, searchParams}){
    const router = useRouter()
    const id = router.query.id

    return(
        <>
            <DetailsTV id={id} />
        </>
    )
}

export default TVPage