import { useEffect, useState } from "react"
import { Sildebar } from "../componet/sildebar"
import { Navigation } from "../componet/top-navigation"
import { da } from "../componet/axiosdata"
import { Header } from "../componet/header"

export function Home() {
  document.title = "Home page"

  let [wallpaper, setwallpaper] = useState(null)

  async function wallpaperfunc() {
    try {
      let d = await da.get(`/trending/all/day`);
      let random = Math.floor(Math.random() * 20)
      setwallpaper(d.data.results[random]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    !wallpaper && wallpaperfunc()
  }, [])
    console.log(wallpaper);
  return <>
  {  wallpaper ? <div className="home">
      <Sildebar />
      <div className="right">
        <Navigation />
        <Header data={wallpaper} />
      </div>
    </div>: <h2>Loading..</h2>}
  </>
}