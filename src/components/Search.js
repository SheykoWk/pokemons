import { useEffect, useState } from "react"
import getPokemonByName from "../services/getPokemonByName"

const Search = () => {

    const [currentValue, setCurrentValue] = useState('')
    const [searchValue, setSearchValue] = useState('')


    useEffect(() => {
        getPokemonByName(searchValue)
            .then(response => {
                console.log(response.data)
            })
    }, [searchValue])

    const handlerChange = (e) => {
        setCurrentValue(e.target.value)
    }

    const handlerSearch = () => {
        setSearchValue(currentValue)
    }


    return(
        <div>
            <input onChange={handlerChange} />
            <button onClick={handlerSearch} >Buscar</button>
        </div>
    )
}
export default Search