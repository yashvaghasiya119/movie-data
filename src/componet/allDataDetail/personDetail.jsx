import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router"
import { Loader } from "../loading"
import '../compo.css'
import { Trandingcard } from "../tranding"
import { loadperson, removeperson } from "../../store/redusers/personslice"
import { personcard } from "../../store/action/personaction"

export function Populardetails (){
    let dispatch = useDispatch();
    let { id } = useParams(); // Extract the movie id from the URL
    let navigate = useNavigate();
    let { pathname } = useLocation(); // Get the current location
  
    // Select the movie details from the Redux state
    let data = useSelector(state => state.person.info);
  //   console.log(data);
      
    useEffect(() => {
      dispatch(personcard(id)); // Dispatch an action to fetch movie details
      return () => {
        dispatch(removeperson()); // Clean up by removing the movie details when leaving the component
      };
    }, [id, dispatch]);
    return<>
   {
    data ? 
    <div className="moviedetail_handleimg " style={{
      backgroundColor:"rgb(0,0,0,.87)",
      width: '100vw',
      margin: '0 auto',
      height: "140vh",
    }}>
      {/* Part 1: Navigation */}
      <div className="all-diraction person-width">
        <i className="ri-arrow-left-fill person-back" onClick={() => navigate(-1)}></i>
      
      </div>

      {/* Part 2: Movie Details and Poster */}
      <div className="mycard" >
        <img src={`https://image.tmdb.org/t/p/original/${data.details.backdrop_path || data.details.poster_path || data.details.profile_path}`} alt="" />
        <div className="contant">
          <h1 className="c-h1" style={{color:"#919ea3"}}>{data.details.name}
          </h1>
          <div className="biography">
              <h1>Biography</h1>
              <p>{data.details.biography}</p>
          </div>
          <h1>Knoe For</h1>
        </div>
      </div>
          <Trandingcard data={data.combiencardits.cast}/>
      <div className="social-media ">
        {/* <hr className="linebrack"/> */}
        <div className="links">
      <a target="_blank" href={`https://www.facebook.com/${data.externalid.facebook_id}`}><i class="ri-facebook-circle-fill social-media-icon"></i></a>
        <a target="_blank" href={`https://www.instagram.com/${data.externalid.instagram_id}`} ><i class="ri-instagram-fill social-media-icon"></i></a>
        <a target="_blank" href={`https://www.imdb.com/name/${data.externalid.imdb_id}`} ><i class="ri-earth-fill social-media-icon"></i></a>
        </div>
      </div>

     {/* part3 personal info */}
     <div className="personinfo">
      <h1>Person Info</h1>
      <div>
        <h1>Know For</h1>
        <p>{data.details.known_for_department}</p>
      </div>
      <div>
        <h1>Gender</h1>
        <p>{data.details.gender===2? "Male" : "Female"}</p>
      </div>
      <div>
        <h1>BirthDay</h1>
        <p>{data.details.birthday}</p>
      </div>
      <div>
        <h1>Place Of Birth</h1>
        <p>{data.details.place_of_birth}</p>
      </div>
      <div>
        <h1>Also Know AS</h1>
        <p>{data.details.also_known_as.join(", ")}</p>
      </div>
      
     </div>
      {/* Outlet to render nested routes (Trailer) */}
      <Outlet  />
    </div>
    
    :<Loader/>
   }
    </>
}