import { current } from "@reduxjs/toolkit";
import './compo.css'

export function Dropdown({ title, options,func }) {

    return <>
        <div className="select" style={{marginRight:"2vw"}}>
            <select defaultValue="0" id="formet" name="formate" onChange={func}>
                <option value="0" disabled>
                    {title}
                </option>
                {
                    options.map((cur, index) => {
                        return <option className="op" key={index} value={cur} >
                            {cur.toUpperCase()}
                        </option>
                    })}
        </select>
        </div>
    </>
}
{/* <option value="movie">Movie</option>
<option value="tv">TV Show</option> */}