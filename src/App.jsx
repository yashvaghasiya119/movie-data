import { Route, Routes } from "react-router"
import { Home } from "./AllRouts/home"
import { Tranding } from "./componet/trandingdata"


function App() {

  return<>
  <div className="route">
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/trandingdata" element={<Tranding/>}/>
  </Routes>
  </div>
  </>

}

export default App
