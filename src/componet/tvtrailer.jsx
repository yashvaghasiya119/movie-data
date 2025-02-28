import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { moviecard } from "../store/action/movieaction";
import { useEffect } from "react";

export function Tvtrailer() {
    let { pathname } = useLocation()
    let navi = useNavigate()
    const category = pathname.includes("moive") ? "movie" : "tv"
    let ytvideo = useSelector((state) => state.tv.info.videos.key)
    console.log(ytvideo);
    function back() {
        navi(-1)
    }
    return <>
        {
            ytvideo ? <div className="trailer" onClick={back}>
            <div className="backpage">
                <i class="ri-arrow-left-fill"> Back</i>
            </div>
            <div className="video_trailer">
            <ReactPlayer controls url={`https://www.youtube.com/watch?v=${ytvideo}`} />
            </div>
        </div>:<h2 style={{color:"white"}}>Not found</h2>
        }
    </>
}