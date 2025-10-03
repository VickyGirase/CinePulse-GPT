import axios from '../utils/Constants'
import { loadtv } from './tvSlice'
export { removetv } from './tvSlice'


export const asyncloadtv = (id) => async (dispatch) => {
    
    try {

        const detail = await axios.get(`/tv/${id}`)
        const externalid = await axios.get(`/tv/${id}/external_ids`)
        const recommendations = await axios.get(`/tv/${id}/recommendations`)
        const similar = await axios.get(`/tv/${id}/similar`)
        const videos = await axios.get(`/tv/${id}/videos`)
        const watchproviders = await axios.get(`/tv/${id}/watch/providers`)
        const translations = await axios.get(`/tv/${id}/translations`)

        const ultimatedetails = {
            detail:detail.data,
            externalid:externalid.data,
            recommendations:recommendations.data.results,
            similar:similar.data.results,
            videos:videos.data.results.find((m)=> m.type === 'Trailer'),
            watchproviders: watchproviders.data.results.IN,
            translations:translations.data.translations.map((t) => t.name),
        }

        dispatch(loadtv(ultimatedetails))      
    }
    catch (error) {
        console.log('error',error);
        
    }
}