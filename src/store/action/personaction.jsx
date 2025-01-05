import { da } from "../../componet/axiosdata";
import { loadperson } from "../redusers/personslice";

export const personcard = (id)=>async (dispatch,getstate)=>{

    try {
        let detail =  await da.get(`/person/${id}`)
        let externalid =  await da.get(`/person/${id}/external_ids`)
        let combiencardits = await da.get(`person/${id}/combined_credits`)
        let tvcardits = await da.get(`person/${id}/tv_credits`)
        let moviecardits = await da.get(`person/${id}/movie_credits`)
      
        let alldata = {
            details:detail.data,
            externalid:externalid.data,
            combiencardits:combiencardits.data,
            tvcardits:tvcardits.data,
            moviecardits:moviecardits.data

        }
        // console.log(alldata);
        dispatch(loadperson(alldata))
        
    } catch (error) {
        console.log(error);
        
    }
}

