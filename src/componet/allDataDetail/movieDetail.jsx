import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate, useParams } from "react-router"
import { moviecard } from "../../store/action/movieaction"
import { loadmovie, removemovie } from "../../store/redusers/movieslice"
import { Loader } from "../loading"
import '../compo.css'
import { Trandingcard } from "../tranding"

// export function Moviedetails() {
//     let dispatch = useDispatch()
//     let { id } = useParams()
//     let navigate = useNavigate()
//     let data = useSelector(state => state.movie.info.details)


//     console.log(data);


//     useEffect(() => {
//         dispatch(moviecard(id))
//         return () => {
//         dispatch(removemovie())
//         }
//     }, [])

//     return <>
//          <div  style={{
//             // background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)) , url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path} )`,
//             width: '94%',
//             margin: '0 auto',
//             height: "45vh",
//             backgroundPosition: "center",
//             backgroundSize: "cover",
//             backgroundRepeat:"no-repeat"
//             // backgroundSize: "top 10%"

//         }} >

//             <nav>
//                 <i className="ri-arrow-left-fill" onClick={() => navigate(-1)}></i>
//                 <a href=""><i class="ri-earth-fill"></i></a>
//                 <a href=""><i class="ri-external-link-line"></i></a>
//                 <a href="">IMDB</a>
//             </nav>

//         </div>
//     </>
// }


//css in index.css
export function Moviedetails() {
    let dispatch = useDispatch();
    let { id } = useParams();
    let navigate = useNavigate();
    let { pathname } = useLocation()


    // Use optional chaining to avoid errors if the data is not yet loaded
    let data = useSelector(state => state.movie.info);
    console.log(data);

    useEffect(() => {
        dispatch(moviecard(id));
        return () => {
            dispatch(removemovie());
        };
    }, [id, dispatch]);

    return (
        <>
            {
                data ? <div className="moviedetail_handleimg" style={{
                    background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)) , url(https://image.tmdb.org/t/p/original/${data.details.backdrop_path} )`,
                    width: '100vw',
                    margin: '0 auto',
                    height: "140vh",
                    backgroundPosition: "center",
                    backgroundSize: "100vw 140vh",
                    backgroundRepeat: "no-repeat",
                    backdropFilter: 'blur(8px)'
                }}>
                    {/* part 1 navigation */}
                    <div className="all-diraction">
                        <i className="ri-arrow-left-fill" onClick={() => navigate(-1)}></i>
                        <a target="_blank" href={data.details.homepage ? data.details.homepage : "https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"}><i className="ri-earth-fill"></i></a>
                        <a target="_blank" href={`https://www.wikidata.org/wiki/${data.externalid.wikidata_id}`} ><i className="ri-external-link-line"></i></a>
                        <a target="_blank" href={`https://www.imdb.com/title/${data.externalid.imdb_id}`} >IMDB</a>
                    </div>
                    {/* part 2 details and poster  */}
                    <div className="mycard">
                        <img src={`https://image.tmdb.org/t/p/original/${data.details.backdrop_path || data.details.poster_path || data.details.profile_path}`} alt="" />
                        <div className="contant">
                            <h1 className="c-h1">{data.details.original_title}
                                <span>({data.details.release_date.split("-")[0]})</span>
                            </h1>
                            <div className="oneline">
                                <h1> {`Rating: ${data.details.vote_average.toFixed(1)}`}</h1>
                                <h1>Users score</h1>
                                <h1>{data.details.release_date}</h1>
                                <h1>{data.details.genres.map(c => c.name).join(" , ")}</h1>
                                <h1>{data.details.runtime}min</h1>
                            </div>
                            <h1 className="tagline">{data.details.tagline}</h1>
                            <h1 className="h1-overview">Overview :</h1>
                            <p className="p-overview">{data.details.overview}</p>
                            <h1 className="h1-overview">Movie-Transalated :</h1>
                            <p className="p-overview">{data.translations.join(" , ")}</p>
                            <Link to={`/${pathname}/Trailer`}><button>play video</button></Link>
                        </div>
                    </div>

                    {/* part 3 Avliable */}
                    {data.watchprovider && data.watchprovider.buy &&
                        <div className="Avliable">
                            <h3>Avliable on.buy</h3>
                            {data.watchprovider.buy.map((cur) => {
                                return <img src={`https://image.tmdb.org/t/p/original/${cur.logo_path}`} title={cur.provider_name} alt="" />

                            })}
                        </div>
                    }
                    {data.watchprovider && data.watchprovider.rent &&
                        <div className="Avliable">
                            <h3>Avliable on rent</h3>
                            {data.watchprovider.rent.map((cur) => {
                                return <img src={`https://image.tmdb.org/t/p/original/${cur.logo_path}`} title={cur.provider_name} alt="" />

                            })}
                        </div>
                    }
                    {data.watchprovider && data.watchprovider.flatrate &&
                        <div className="Avliable">
                            <h3>Avliable on flatrate</h3>
                            {data.watchprovider.flatrate.map((cur) => {
                                return <img src={`https://image.tmdb.org/t/p/original/${cur.logo_path}`} title={cur.provider_name} alt="" />

                            })}
                        </div>
                    }

                    {/* part 4 similer and recomandation  */}
                    <hr style={{backgroundColor:'white' , height:"2px" , width:"100%"}}/>
                    <h1 className="recomand-h1">Recommendation movies</h1>
                    <Trandingcard data={data.recommendations ? data.recommendations : data.similar} />
                </div>
                    : <Loader />
            }
        </>
    );
}
