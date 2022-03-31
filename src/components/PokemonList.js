import getAllPokemons from "../services/getAllPokemons"
import { useEffect, useState } from 'react';
import Pokemon from "./Pokemon";

const PokemonList = () => {

    const [pokeArray, setPokeArray] = useState([])

    useEffect(() => {
        getAllPokemons()
            .then(response =>{
                setPokeArray(response.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const list = pokeArray.map((pokemon) => <Pokemon name={pokemon.name} url={pokemon.url} key={pokemon.url} />)

    return(
        <div>
            { list }
        </div>
    )
}

export default PokemonList