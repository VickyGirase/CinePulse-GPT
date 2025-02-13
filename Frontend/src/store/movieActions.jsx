import axios from '../utils/Constants'
import { loadmovie } from './movieSlice'
export { removemovie } from './movieSlice'


export const asyncloadmovie = (id) => async (dispatch) => {
    
    try {

        const detail = await axios.get(`/movie/${id}`)
        const externalid = await axios.get(`/movie/${id}/external_ids`)
        const recommendations = await axios.get(`/movie/${id}/recommendations`)
        const similar = await axios.get(`/movie/${id}/similar`)
        const videos = await axios.get(`/movie/${id}/videos`)
        const watchproviders = await axios.get(`/movie/${id}/watch/providers`)
        const translations = await axios.get(`/movie/${id}/translations`)

        const ultimatedetails = {
            detail:detail.data,
            externalid:externalid.data,
            recommendations:recommendations.data.results,
            similar:similar.data.results,
            videos:videos.data.results.find((m)=> m.type === 'Trailer'),
            watchproviders: watchproviders.data.results.IN,
            translations:translations.data.translations.map((t) => t.name),
        }

        dispatch(loadmovie(ultimatedetails))      
    }
    catch (error) {
        console.log('error',error);
        
    }
}