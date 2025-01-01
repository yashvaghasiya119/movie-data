import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { moviecard } from "../store/action/movieaction";
import { useEffect } from "react";

export function Trailer() {
    let { pathname } = useLocation()
    let navi = useNavigate()
    const category = pathname.includes("moive") ? "movie" : "tv"
    let ytvideo = useSelector((state) => state.movie.info.videos.key)
    console.log(ytvideo);
    function back() {
        navi(-1)
    }
    return <>
        <div className="trailer" onClick={back}>
            <div className="backpage">
                <i class="ri-arrow-left-fill"> Back</i>
            </div>
            <div className="video_trailer">
            <ReactPlayer url={`https://www.youtube.com/watch?v=${ytvideo}`} />
            </div>
        </div>
    </>
}