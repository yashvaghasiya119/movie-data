import { useEffect, useState } from "react"
import { Sildebar } from "../componet/sildebar"
import { Navigation } from "../componet/top-navigation"
import { da } from "../componet/axiosdata"

export function Home(){
    document.title = "Home page"

    let [wallpaper,setwallpaper]=useState(null)

    async function wallpaperfunc(){
         try {
              let d = await da.get(`/trending/all/day`);
              let random =Math.floor(Math.random()*20)
              setwallpaper(d.data.results[random].original_title);
            //   console.log();
            } catch (error) {
              console.log(error);
            }
          };
    useEffect(()=>{
      !wallpaper &&  wallpaperfunc()
    },[])
    return<>
   <div className="home">
    <Sildebar />
    <div className="right">
        <Navigation />
    </div>
   </div>
    </>
}