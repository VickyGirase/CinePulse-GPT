import axios from '../utils/Constants'
import { loadperson } from './personSlice'
export { removeperson } from './personSlice'


export const asyncloadperson = (id) => async (dispatch) => {
    
    try {

        const detail = await axios.get(`/person/${id}`)
        const externalid = await axios.get(`/person/${id}/external_ids`)
        const combinedCredits = await axios.get(`/person/${id}/combined_credits`)
        const movieCredits = await axios.get(`/person/${id}/movie_credits`)
        const tvCredits = await axios.get(`/person/${id}/tv_credits`)

        const ultimatedetails = {
            detail:detail.data,
            externalid: externalid.data,
            combinedCredits: combinedCredits.data,
            movieCredits: movieCredits.data,
            tvCredits: tvCredits.data
        }

        dispatch(loadperson(ultimatedetails))      
    }
    catch (error) {
        console.log('error',error);
        
    }
}