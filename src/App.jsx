import { Route, Routes } from "react-router"
import { Home } from "./AllRouts/home"
import { Tranding } from "./componet/trandingdata"
import { Populer } from "./componet/popular"
import { Movie } from "./componet/movie"
import { Tvshow } from "./componet/tvshow"
import { People } from "./componet/people"


function App() {

  return<>
  <div className="route">
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/trandingdata" element={<Tranding/>}/>
    <Route path="/popular" element={<Populer/>}/>
    <Route path="/movie" element={<Movie/>}/>
    <Route path="/tvshow" element={<Tvshow/>}/>
    <Route path="/people" element={<People/>}/>
  </Routes>
  </div>
  </>

}

export default App
