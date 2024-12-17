import { Link } from 'react-router';
import './compo.css'
export function Header({ data }) {

    console.log(data);

    return <>
        <div className="headerposter" style={{
            background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)) , url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path} )`,
            width: '100%',
            margin: '0 auto',
            height: "45vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat:"no-repeat"
            // backgroundSize: "top 10%"

        }} >
            <div className="header_box">

                <h1>{data.name || data.title || data.original_name || data.original_title}</h1>
                <p>{data.overview.slice(0, 250)} <Link style={{ color: "#6556cd" }}>more...</Link></p>
                <p className='second_pera_header'>
                    <span className='header_span_1'> <i className="ri-calendar-schedule-fill ic"></i> {data.release_date || "No Information"}</span>
                    <span className='header_span_1'> <i className="ri-movie-2-fill ic icon2"></i> {data.media_type}</span>
                </p>
               <button className='trailer'> <Link className='trailer_link' >Watch Trailer</Link></button>
            </div>
        </div>
    </>
}