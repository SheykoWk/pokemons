import { useEffect, useState } from "react"
import getPokemon from "../services/getPokemon"

const Pokemon = ({name, url}) => {

    const [pokeImg, setPokeImg] = useState('')

    useEffect(() => {
        getPokemon(url)
            .then(response => {
                setPokeImg(response.data.sprites.front_default)
            })
            .catch(err => {
                console.log(err)
            })
    }, [url])



    return (
        <div>
            <img src={pokeImg} alt='' />
            <h1> {name} </h1>
        </div>
    )
}

export default Pokemon