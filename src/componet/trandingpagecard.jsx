import { Link, NavLink } from "react-router";
import { Loader } from "./loading";
import noimg from './no-img.jpeg'
import './compo.css'

// this is part of trandingdata cmponet

export function Trandingpagecards({data,title}){
    
    return<>
    <div className="s-tranding-main">
        {
            data ? data.map((cur,index)=>{
                return <NavLink to={`/${cur.media_type ||title}/details/${cur.id}`} key={index}>
                    <div  className="s-tranding-loop">
                        <img src={`https://image.tmdb.org/t/p/original/${cur.backdrop_path || cur.poster_path || cur.profile_path}`} alt="" />
                      <h1>{cur.name || cur.title || cur.original_name || cur.original_title}</h1>
                     {cur.vote_average && <div className="rate">Rating: {cur.vote_average.toFixed(1)}</div>}
                {/* <p>{cur.overview.slice(0, 100)} <Link style={{ color: "#6556cd" }}>more...</Link></p> */}
                </div>
                </NavLink>
            }):<Loader/>
        }
    </div>
    
    </>

}