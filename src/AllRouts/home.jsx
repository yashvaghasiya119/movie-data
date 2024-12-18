import { useEffect, useState } from "react"
import { Sildebar } from "../componet/sildebar"
import { Navigation } from "../componet/top-navigation"
import { da } from "../componet/axiosdata"
import { Header } from "../componet/header"
import { Trandingcard } from "../componet/tranding"
import { Dropdown } from "../componet/dropdown"

export function Home() {
  document.title = "Home page"

  let [wallpaper, setwallpaper] = useState(null)
  let [tranding,setTranding]=useState(null)
  let [catagory,setcatogary]=useState("all")

  async function wallpaperfunc() {
    try {
      let d = await da.get(`/trending/all/day`);
      let random = Math.floor(Math.random() * 20)
      setwallpaper(d.data.results[random]);
    } catch (error) {
      console.log(error);
    }
  };
  async function trandingfun() {
    try {
      let d = await da.get(`/trending/${catagory}/day`);
      setTranding(d.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    !wallpaper && wallpaperfunc()
  }, [])
  useEffect(() => {
    trandingfun()
    !wallpaper && wallpaperfunc()
  }, [catagory])
  return <>
    {wallpaper && tranding ? <div className="home">
      <Sildebar />
      <div className="right">
        <Navigation />
        <Header data={wallpaper} />
        <div className="drop-box">
     <h1 className='trandig_heading'>Tranding</h1>
     <Dropdown title="filter" options={["tv","movie","all"]}  func={(e)=>setcatogary(e.target.value)} />
     </div>
        <Trandingcard data={tranding}  catagory={setcatogary}/>
      </div>
    </div>
      : <h2>Loading..</h2>}
  </>
}