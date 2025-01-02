import { da } from "../../componet/axiosdata";
import { loadtv } from "../redusers/tvslice";

export const tvcard = (id)=>async (dispatch,getstate)=>{

    try {
        let detail =  await da.get(`/tv/${id}`)
        let externalid =  await da.get(`/tv/${id}/external_ids`)
        let similar =  await da.get(`/tv/${id}/similar`)
        let recommendations = await da.get(`/tv/${id}/recommendations`)
        let watchprovider =  await da.get(`/tv/${id}/watch/providers`)
        let translations =  await da.get(`/tv/${id}/translations`)
        let videos =  await da.get(`/tv/${id}/videos`)
      
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
        dispatch(loadtv(alldata))
        
    } catch (error) {
        console.log(error);
        
    }
}

