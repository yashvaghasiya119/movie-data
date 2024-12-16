// import { data, Link } from 'react-router'
// import './compo.css'
// import { useEffect, useState } from 'react'
// import { da } from './axiosdata'

// export function Navigation() {
//   // React state for the query
//   const [query, setquery] = useState("salar");
//   let [data1,setdata]=useState(null)
//   let[loading,setloading]=useState(true)

//   let icon = query.length > 0;

//   const myfun = async () => {
//     try {
//       // const d = await da.get(`movie/now_playing?query=${query}`);
//       let d = await da.get(`search/multi?query=${query}`)
//       setdata(d.data.results)
//       console.log(d.data.results[0].original_title);

//       setloading(false)

//     } catch (error) {
//       console.log(error);
//     }
//   };

// useEffect(()=>{
//     myfun()
// },[query])
// console.log(data1);


//   // 
//     if(loading)return <h1>Loading</h1>
//     return <>
//         <div className="navi-main">

//             <i className="ri-search-eye-line nav-icon"></i>
//             <input type="text" placeholder="search anything" value={query} onChange={(e)=>setquery(e.target.value)}/>
//             {icon? <i className="ri-close-fill nav-icon" onClick={()=>setquery("")}></i>:"" }
//         </div>
//         <div className="searchitem">
//           {
//            data1 ||  data1.map((cur,index)=>{
//                 return <Link key={index} className="navlink">
//                   <img src="" alt="" />
//                   <span>{cur.name || cur.title || cur.original_name || cur.original_title}</span>
//                   <hr style={{ border: "2px solid grey ", width: "100%", marginTop: 0 }} /> 
//               </Link>
//             })
//           }


//         </div>

//     </>
// }

//gpt
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import './compo.css';
import { da } from './axiosdata';
import noimg from  './no-img.jpeg'

export function Navigation() {
  const [query, setquery] = useState("");
  const [data1, setdata] = useState([]);
  const [loading, setloading] = useState(false);

  const icon = query.length > 0;

  const myfun = async () => {
    if (!query) return; // Prevent API call if query is empty
    try {
      let d = await da.get(`search/multi?query=${query}`);
      setdata(d.data.results);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false); // Stop loading if there's an error
    }
  };

  useEffect(() => {
    myfun();
  }, [query]);

  if (loading) return <h1>Loading</h1>;

  return (
    <>
      <div className="navi-main">
        <i className="ri-search-eye-line nav-icon"></i>
        <input
          type="text"
          placeholder="search anything"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        {icon && (
          <i
            className="ri-close-fill nav-icon"
            onClick={() => setquery("")}
          ></i>
        )}
      </div>
      <div className="searchitem">
      
          {data1.map((cur, index) => (
            <Link key={index} className="navlink">
              <img src={ cur.backdrop_path || cur.profile_path ? `https://image.tmdb.org/t/p/original/${cur.backdrop_path || cur.profile_path} ` : noimg}  />
              <span>{cur.name || cur.title || cur.original_name || cur.original_title}</span>
              {/* <hr style={{ border: "2px solid grey ", width: "100%", marginTop: 0 }} /> */}
            </Link>
          ))
       }
      </div>
    </>
  );
}
