import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router"
import { Loader } from "../loading"
import '../compo.css'
import { Trandingcard } from "../tranding"
import { tvcard } from "../../store/action/tvaction"
import { removetv } from "../../store/redusers/tvslice"

export function Tvdetails() {
  let dispatch = useDispatch();
  let { id } = useParams(); // Extract the movie id from the URL
  let navigate = useNavigate();
  let { pathname } = useLocation(); // Get the current location

  // Select the movie details from the Redux state
  let data = useSelector(state => state.tv.info);
  let seasons = useSelector(state => state.tv)
  //   console.log(data);

  useEffect(() => {
    dispatch(tvcard(id)); // Dispatch an action to fetch movie details
    return () => {
      dispatch(removetv()); // Clean up by removing the movie details when leaving the component
    };
  }, [id, dispatch]);
  return <>
    <>
      {
        data ? (
          <div className="moviedetail_handleimg" style={{
            background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${data.details.backdrop_path} )`,
            width: '100vw',
            margin: '-0 auto',
            height: "190vh",
            backgroundPosition: "center",
            // backgroundSize: "100vw 140vh",
            backgroundRepeat: "no-repeat",
            backdropFilter: 'blur(8px)',
            backgroundSize: "cover"
          }}>
            {/* Part 1: Navigation */}
            <div className="all-diraction">
              <i className="ri-arrow-left-fill" onClick={() => navigate(-1)}></i>
              <a target="_blank" href={data.details.homepage ? data.details.homepage : "https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"}><i className="ri-earth-fill"></i></a>
              <a target="_blank" href={`https://www.wikidata.org/wiki/${data.externalid.wikidata_id}`} ><i className="ri-external-link-line"></i></a>
              <a target="_blank" href={`https://www.imdb.com/title/${data.externalid.imdb_id}`} >IMDB</a>
            </div>

            {/* Part 2: Movie Details and Poster */}
            <div className="mycard">
              <img src={`https://image.tmdb.org/t/p/original/${data.details.backdrop_path || data.details.poster_path || data.details.profile_path}`} alt="" />
              <div className="contant">
                <h1 className="c-h1">{data.details.original_title || data.details.name}
                  <span>({data.details.first_air_date.split("-")[0]})</span>
                </h1>
                <div className="oneline">
                  <h1> {`Rating: ${data.details.vote_average.toFixed(1)}`}</h1>
                  <h1>Users score</h1>
                  <h1>{data.details.first_air_date}</h1>
                  <h1>{data.details.genres.map(c => c.name).join(" , ")}</h1>
                  <h1>{data.details.runtime}min</h1>
                </div>
                <h1 className="tagline">{data.details.tagline}</h1>
                <h1 className="h1-overview">Overview :</h1>
                <p className="p-overview">{data.details.overview}</p>
                <h1 className="h1-overview">Tvshows-Translated :</h1>
                <p className="p-overview">{data.translations.join(" , ")}</p>
                {/* <Link to ={`/movie/details/${data.details.id}/Trailer`}><button >Play Video</button></Link>  */}
                {
                  data.videos ? <Link to={`/tv/details/${data.details.id}/Trailer`}><button className="btn_trailer" >Play Video</button></Link> :
                    <button className="btn_trailer" disabled="true">Trailer not avilable</button>
                }
              </div>
            </div>

            {/* Part 3: Available Providers */}
            {data.watchprovider && data.watchprovider.buy &&
              <div className="Avliable">
                <h3>Available on Buy</h3>
                {data.watchprovider.buy.map((cur) => {
                  return <img key={cur.provider_name} src={`https://image.tmdb.org/t/p/original/${cur.logo_path}`} title={cur.provider_name} alt="" />
                })}
              </div>
            }

            {data.watchprovider && data.watchprovider.rent &&
              <div className="Avliable">
                <h3>Available on Rent</h3>
                {data.watchprovider.rent.map((cur) => {
                  return <img key={cur.provider_name} src={`https://image.tmdb.org/t/p/original/${cur.logo_path}`} title={cur.provider_name} alt="" />
                })}
              </div>
            }

            {data.watchprovider && data.watchprovider.flatrate &&
              <div className="Avliable">
                <h3>Available on Flatrate</h3>
                {data.watchprovider.flatrate.map((cur) => {
                  return <img key={cur.provider_name} src={`https://image.tmdb.org/t/p/original/${cur.logo_path}`} title={cur.provider_name} alt="" />
                })}
              </div>
            }


            {/* part 4 season */}
            <hr style={{ backgroundColor: 'white', height: "2px", width: "100%" }} />
            <h1 className="recomand-h1">All seasons</h1>
            <div className="seasons">
              {
                seasons.info?.details?.seasons.map((c, i) => {
                    console.log(c);
                  return <div key={i} >
                    <img className="tranding_img" src={`https://image.tmdb.org/t/p/original/${c.poster_path}`} alt="" />
                  </div>
                })
              }
            </div>

            {/* Part 5: Recommendations */}
            <hr style={{ backgroundColor: 'white', height: "2px", width: "100%" }} />
            <h1 className="recomand-h1">Recommendation Shows</h1>
            <Trandingcard data={data.recommendations ? data.recommendations : data.similar} />

            {/* Outlet to render nested routes (Trailer) */}
            <Outlet />
          </div>
        ) : <Loader /> // Loading state if data is not yet available
      }
    </>
  </>
}