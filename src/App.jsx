import { Route, Routes } from "react-router"
import { Home } from "./AllRouts/home"
import { Tranding } from "./componet/trandingdata"
import { Populer } from "./componet/popular"
import { Movie } from "./componet/movie"
import { Tvshow } from "./componet/tvshow"
import { People } from "./componet/people"
import { Moviedetails } from "./componet/allDataDetail/movieDetail"
import { Tvdetails } from "./componet/allDataDetail/tvDetail"
import { Populardetails } from "./componet/allDataDetail/popularDetail"
import { Trailer } from "./componet/trailer"


function App() {

  return <>
    <div className="route">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trandingdata" element={<Tranding />} />
        <Route path="/popular" element={<Populer />} />
        <Route path="/movie" element={<Movie />}/>
          {/* <Route path="/movie/details/:id" element={<Moviedetails/>} >
            <Route path="/movie/details/:id/trailer" element={<Trailer/>} />
          </Route> */}
          <Route path="/movie/details/:id" element={<Moviedetails />}>
          <Route path="/movie/details/:id/Trailer" element={<Trailer />} />
        </Route>
        <Route path="/tvshow" element={<Tvshow />}/>
        <Route path="/tv/details/:id" element={<Tvdetails/>}  />
        <Route path="/people" element={<People />} />
        <Route path="/people/details/:id" element={<Populardetails/>} />
    </Routes>
  </div >
  </>

}

export default App
