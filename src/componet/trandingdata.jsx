// import './compo.css'
// import { Navigation } from './top-navigation'
// import { Dropdown } from './dropdown'
// import { useNavigate } from 'react-router'
// import { useEffect, useState } from 'react'
// import { da } from './axiosdata'
// import { Trandingcard } from './tranding'
// import { Trandingpagecards } from './trandingpagecard'
// import InfiniteScroll from 'react-infinite-scroll-component';

// //this is particuler page or path
// export function Tranding() {
//   let [catagory, setcatogary] = useState("all")
//   let [duration, setduration] = useState("day")
//   let [tranding, setTranding] = useState(null)
//   let [page, setpage] = useState(1)
//   document.title = "Tranding"
//   let navigate = useNavigate()
//   async function trandingfun() {
//     try {
//       // let d = await da.get(`/trending/${catagory}/${duration}/`)
//       let d = await da.get(`/trending/${catagory}/${duration}`, {
//         params: {
//           page: page
//         }
//       });

//       setTranding(d.data.results);
//       setTranding((prev)=>[...prev,{...d.data.results.length}])
//       // setpage((prev)=>prev+1)
//       console.log(d.data);

//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     trandingfun()
//   }, [catagory, duration, page])

//   function clickbtn() {
//     setpage(page - 1)
//     // window.scrollBy({top:-8000,left:23,behavior:"smooth"})
//   }

  

//   return <>
//     <div className="t-page-main">
//       <div className="t-page-heading">
//         <i class="ri-arrow-left-fill" onClick={() => navigate(-1)}></i>
//         <span>Tranding</span>
//         {/* <h1><i class="ri-arrow-left-fill" onClick={() => navigate(-1)}></i>Tranding</h1> */}
//         <Navigation />
//         <Dropdown title="filter" options={["tv", "movie", "all"]} func={(e) => setcatogary(e.target.value)} />
//         <Dropdown title="filter" options={["week", "day"]} func={(e) => setduration(e.target.value)} />
//       </div>
//         {tranding && <Trandingpagecards data={tranding} />}

//       {/*     
//      <div className="pagebutton">
//       <button onClick={clickbtn} disabled={page<=1} id='top1'>Prev</button>
//       <h3>{page}</h3>
//       <button onClick={()=>setpage(page+1)} id='top'>Next</button>
//       </div> */}
//     </div>
//   </>
// }
import './compo.css';
import { Navigation } from './top-navigation';
import { Dropdown } from './dropdown';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { da } from './axiosdata';
import { Trandingpagecards } from './trandingpagecard';
import InfiniteScroll from 'react-infinite-scroll-component';

export function Tranding() {
  let [catagory, setcatogary] = useState("all");
  let [duration, setduration] = useState("day");
  let [tranding, setTranding] = useState([]);
  let [loading, setloading] = useState(false);
  let [page, setpage] = useState(1);
  document.title = "Tranding";
  let navigate = useNavigate();

  // Function to fetch trending data
  async function trandingfun() {
    try {
      setloading(true);
      // Make an API call to get trending data
      let response = await da.get(`/trending/${catagory}/${duration}`, {
        params: { page }
      });

      // Append the new results to the previous data
      setTranding((prev) => [...prev, ...response.data.results]);

      setloading(false);
    } catch (error) {
      console.error(error);
      // setloading(false);
    }
  }

  // Fetch the data when category, duration, or page changes
  useEffect(() => {
    trandingfun();
  }, [catagory, duration, page]);

  // Infinite scroll event handler
  async function fetchMoreData() {
    if (!loading) {
      setpage((prev) => prev + 1);  // Increment the page to fetch next results
    }
  }

  return (
    <>
      <div className="t-page-main">
        <div className="t-page-heading">
          <i className="ri-arrow-left-fill" onClick={() => navigate(-1)}></i>
          <span>Tranding</span>
          <Navigation />
          <Dropdown title="filter" options={["tv", "movie", "all"]} func={(e) => setcatogary(e.target.value)} />
          <Dropdown title="filter" options={["week", "day"]} func={(e) => setduration(e.target.value)} />
        </div>

        {/* Infinite scroll component */}
        <InfiniteScroll
          dataLength={tranding.length}  // Length of the current list
          next={fetchMoreData}  // Function to load more data
          hasMore={!loading}  // Disable scroll when data is being loaded
          loader={<h4>Loading...</h4>}  // Loader message
          endMessage={<p>No more data to load</p>}  // End message when all data is loaded
        >
          {/* Render the cards */}
          {tranding && <Trandingpagecards data={tranding} />}
        </InfiniteScroll>
      </div>
    </>
  );
}



