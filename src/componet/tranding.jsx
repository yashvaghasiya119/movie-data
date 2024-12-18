import { Link } from 'react-router';
import './compo.css'
import { Dropdown } from './dropdown';

export function Trandingcard({data}){
console.log(data);

    return<>
    <div className="tranding-main-card">
     
        <div className="cardpices"> 
            { data && data.map((cur,index)=>{
                return <div key={index} className='all_tranding_cards'>
                    <img className='tranding_img' src={`https://image.tmdb.org/t/p/original/${cur.backdrop_path || cur.poster_path}`} alt="" />
                      <h1>{cur.name || cur.title || cur.original_name || cur.original_title}</h1>
                <p>{cur.overview.slice(0, 100)} <Link style={{ color: "#6556cd" }}>more...</Link></p>
                
               {/* <button className='trailer'> <Link className='trailer_link' >Watch Trailer</Link></button> */}
                </div>
            })}
        </div>
    </div>
    </>
}