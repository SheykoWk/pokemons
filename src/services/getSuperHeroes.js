import dotenv from 'dotenv'
import axios from 'axios';
dotenv.config()

const getSuperHeroes = async () =>{

    const URL = `https://superheroapi.com/api/${process.env.API_KEY}`
    const req = await axios.get(URL)
    return req

}

export default getSuperHeroes