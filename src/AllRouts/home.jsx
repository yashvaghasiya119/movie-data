import { Sildebar } from "../componet/sildebar"
import { Navigation } from "../componet/top-navigation"

export function Home(){
    document.title = "Home page"
    return<>
   <div className="home">
    <Sildebar/>
    <div className="right">
        <Navigation/>
    </div>
   </div>
    </>
}