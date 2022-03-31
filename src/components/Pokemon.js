import { useEffect } from "react"
import getPokemon from "../services/getPokemon"

const Pokemon = ({name, url}) => {

    useEffect(() => {
        getPokemon(url)
            .then(response => {
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [url])




    return (
        <div>
            <h1> {name} </h1>
        </div>
    )
}

export default Pokemon