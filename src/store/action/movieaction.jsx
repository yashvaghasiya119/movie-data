import { da } from "../../componet/axiosdata";
import { loadmovie } from "../redusers/movieslice";

export const moviecard = (id)=>async (dispatch,getstate)=>{

    try {
        let detail =  await da.get(`/movie/${id}`)
        let externalid =  await da.get(`/movie/${id}/external_ids`)
        let similar =  await da.get(`/movie/${id}/similar`)
        let watchprovider =  await da.get(`/movie/${id}/watch/providers`)
        let videos =  await da.get(`/movie/${id}/videos`)
      
        let alldata = {
            detail:detail.data,
            externalid:externalid.data,
            similar:similar.data.results,
            watchprovider:watchprovider.data.results,
            videos:videos.data.results.find((cur)=>cur.type === "Trailer")
        }
        console.log(alldata);
        dispatch(loadmovie(alldata))
        
    } catch (error) {
        console.log(error);
        
    }
}