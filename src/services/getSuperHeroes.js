import axios from 'axios'

const getSuperHeroes = async () =>{

    const URL = `http://superheroapi.com/api/310632584490877/1`
    const req = await axios.get(URL)
    return req

}

export default getSuperHeroes