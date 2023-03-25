import API from '../api/rest'

export const getPokemon = async (i) => {
    return await API.getRest(`pokemon/${i}`)
}

