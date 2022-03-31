import getAllPokemons from "../services/getAllPokemons"
import { useEffect } from 'react';

const PokemonList = () => {

    useEffect(() => {
        getAllPokemons()
            .then(response =>{
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return(
        <div>

        </div>
    )
}

export default PokemonList