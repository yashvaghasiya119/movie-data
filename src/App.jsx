import { Route, Routes } from "react-router"
import { Home } from "./AllRouts/home"


function App() {

  return<>
  <div className="route">
  <Routes>
    <Route path="/" element={<Home/>}/>
  </Routes>
  </div>
  </>

}

export default App
