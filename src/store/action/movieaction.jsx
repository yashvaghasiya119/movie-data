import { all } from "axios";
import { da } from "../../componet/axiosdata";
import { loadmovie } from "../redusers/movieslice";

export const moviecard = (id)=>async (dispatch,getstate)=>{

    try {
        let detail =  await da.get(`/movie/${id}`)
        let externalid =  await da.get(`/movie/${id}/external_ids`)
        let similar =  await da.get(`/movie/${id}/similar`)
        let recommendations = await da.get(`/movie/${id}/recommendations`)
        let watchprovider =  await da.get(`/movie/${id}/watch/providers`)
        let translations =  await da.get(`/movie/${id}/translations`)
        let videos =  await da.get(`/movie/${id}/videos`)
      
        let alldata = {
            details:detail.data,
            externalid:externalid.data,
            similar:similar.data.results,
            recommendations:recommendations.data.results,
            translations:translations.data.translations.map(c => c.name),
            watchprovider:watchprovider.data.results.IN,
            videos:videos.data.results.find((cur)=>cur.type === "Trailer")
        }
        console.log(alldata);
        dispatch(loadmovie(alldata))
        
    } catch (error) {
        console.log(error);
        
    }
}

