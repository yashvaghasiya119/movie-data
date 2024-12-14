import { Link } from "react-router";

export function Sildebar() {

    return <>
        <div className="left">
            <div className="left-main">
                <h2>
                    <i className="ri-tv-fill" style={{ color: "#6556cd" }}></i>
                    <span className="left-span-1"> Yash movies</span>
                </h2>
                <span className="left-span-2">New feed</span>
                <div className="all-links">
                    <Link className="link">Tranding</Link>
                    <Link className="link">Popular</Link>
                    <Link className="link">Movies</Link>
                    <Link className="link">Tv show</Link>
                    <Link className="link">People</Link>
                </div>
            </div>
        </div>
    </>
}