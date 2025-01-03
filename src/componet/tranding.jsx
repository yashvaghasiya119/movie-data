import { Link, NavLink } from 'react-router';
import './compo.css'
import { Dropdown } from './dropdown';
import noimg from './no-img.jpeg'



// ?this is first page horizontal trnding card 

export function Trandingcard({data}){
// console.log(data);

    return<>
    <div className="tranding-main-card">
     
        <div className="cardpices"> 
            { data && data.map((cur,index)=>{
                return<NavLink className='all_tranding_cards' to={`/${cur.media_type }/details/${cur.id}`} key={index}>
               <div key={index} >
                <img className='tranding_img' src={ cur.backdrop_path || cur.poster_path ? `https://image.tmdb.org/t/p/original/${cur.backdrop_path || cur.poster_path}` :noimg} alt="" />
                  <h1>{cur.name || cur.title || cur.original_name || cur.original_title}</h1>
            <p>{cur.overview.slice(0, 100)} <Link style={{ color: "#6556cd" }}>more...</Link></p>
           {/* <button className='trailer'> <Link className='trailer_link' >Watch Trailer</Link></button> */}
            </div>
            </NavLink>
            })}
        </div>
    </div>
    </>
}