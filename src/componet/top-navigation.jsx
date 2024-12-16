import { data, Link } from 'react-router'
import './compo.css'
import { useEffect, useState } from 'react'
import { da } from './axiosdata'

export function Navigation() {
  // React state for the query
  const [query, setquery] = useState("");
  let [data,setdata]=useState(null)
  let[loading,setloading]=useState(true)

  // This will check if the query length is more than 0
  let icon = query.length > 0;

//   // Define async function inside the component
  const myfun = async () => {
    try {
      const d = await da.get(`movie/now_playing?query=${query}`);
      setdata(d.data.results)
      // console.log(d.data.results);
      setloading(false)
      
    } catch (error) {
      console.log(error);
    }
  };

useEffect(()=>{
    myfun()
},[query])


  // 
    if(loading)return <h1>Loading</h1>
    return <>
        <div className="navi-main">

            <i className="ri-search-eye-line nav-icon"></i>
            <input type="text" placeholder="search anything" value={query} onChange={(e)=>setquery(e.target.value)}/>
            {icon? <i className="ri-close-fill nav-icon" onClick={()=>setquery("")}></i>:"" }
        </div>
        <div className="searchitem">
            {/* <Link className="navlink">
                <img src="" alt="" />
                <p>this is seach</p>
            </Link>
            <hr style={{ border: "2px solid grey ", width: "100%", marginTop: 0 }} /> */}

        </div>
     {
      data ? data.map((vr,index)=>{
        return <div key={index} style={{color:"white"}}>{vr.original_title}
          </div>
         
       }) : "lo"
     }
    </>
}
