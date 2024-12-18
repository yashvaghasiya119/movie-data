import { Link } from "react-router";
import { Loader } from "./loading";
import './compo.css'

export function Trandingpagecards({data}){

    return<>
    <div className="s-tranding-main">
        {
            data ? data.map((cur,index)=>{
                return <div key={index} className="s-tranding-loop">
                        <img src={`https://image.tmdb.org/t/p/original/${cur.backdrop_path || cur.poster_path}`} alt="" />
                      <h1>{cur.name || cur.title || cur.original_name || cur.original_title}</h1>
                <p>{cur.overview.slice(0, 100)} <Link style={{ color: "#6556cd" }}>more...</Link></p>
                </div>
            }):<Loader/>
        }
    </div>
    </>

}