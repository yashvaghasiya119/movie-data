import { Link } from "react-router";

export function Sildebar() {

    return <>
        <div className="left">
            <div className="left-main">
                <h2>
                    <i className="ri-tv-fill" style={{ color: "#6556cd" }}></i>
                    <span className="left-span-1"> Yash movies</span>
                </h2>
                {/* <span className="left-span-2">New feed</span> */}
                <div className="all-links">
                    <Link to={'/trandingdata'} className="link"><i className="ri-fire-fill gap"></i> Tranding</Link>
                    <Link to={'./popular'} className="link"><i className="ri-bard-fill gap"></i> Popular</Link>
                    <Link  to={'./movie'} className="link"><i className="ri-movie-fill gap"></i> Movies</Link>
                    <Link to={'./tvshow'} className="link"><i className="ri-tv-2-fill gap"></i> Tv show</Link>
                    <Link to={'./people'} className="link"><i className="ri-team-fill gap"></i> People</Link>
                    <hr style={{border:"2px solid grey ",width:"100%"}}/>
                    <h2 style={{color:"white"}}>Website information</h2>
                    <Link className="link"><i className="ri-information-2-fill gap"></i> About us</Link>
                    <Link className="link"><i className="ri-contacts-fill gap"></i> Contact us</Link>
                </div>
            </div>
        </div>
    </>
}