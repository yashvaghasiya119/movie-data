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

// // Advance level 
// import './compo.css';
// import { Navigation } from './top-navigation';
// import { Dropdown } from './dropdown';
// import { useNavigate } from 'react-router';
// import { useEffect, useState } from 'react';
// import { da } from './axiosdata';
// import { Trandingpagecards } from './trandingpagecard';
// import InfiniteScroll from 'react-infinite-scroll-component';

// export function Tranding() {
//   let [catagory, setcatogary] = useState("all");
//   let [duration, setduration] = useState("day");
//   let [tranding, setTranding] = useState([]);
//   let [loading, setloading] = useState(false);
//   let [page, setpage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   document.title = "TRANDING " 
//   let navigate = useNavigate();

//   // Function to fetch trending data
//   async function trandingfun() {
//     try {
//       setloading(true);
//       // Make an API call to get trending data
//       let response = await da.get(`/trending/${catagory}/${duration}`, {
//         params: { page }
//       });

//       // Append the new results to the previous data
//       // setTranding((prev) => [...prev, ...response.data.results]);
//       setTranding((prev) => {
//         const newData = response.data.results.filter(item => !prev.some(existingItem => existingItem.id === item.id));
//         return [...prev, ...newData];
//       });
//       // If the fetched data is less than the limit (e.g., 9), disable further fetching
//       if (response.data.results.length < 9) {
//         setHasMore(false);
//       }

//       setloading(false);
//     } catch (error) {
//       setloading(false);
//       console.error(error);
//     }
//   }
// console.log(tranding.length);

//   // Fetch the data when category, duration, or page changes
//   useEffect(() => {
//     trandingfun();
//   }, [catagory, duration, page]);

//   // Infinite scroll event handler
//   async function fetchMoreData() {
//     if (!loading && hasMore) {  // Only fetch more if no fetch is in progress
//       setpage((prev) => prev + 1);  // Increment the page to fetch next results
//     }
//   }
//   useEffect(() => {
//     setpage(1); // પૃષ્ઠને 1 પર રીસેટ કરો
//     setHasMore(true);  // hasMore ને ફરીથી સેટ કરો
//     setTranding([]);  // જૂના ડેટાને સાફ કરો
//     trandingfun();  // નવા ફિલ્ટર પર આધારિત ડેટા ફેચ કરો
//   }, [catagory, duration]);
  
//   return (
//     <>
//       <div className="t-page-main">
//         <div className="t-page-heading">
//           <i className="ri-arrow-left-fill" onClick={() => navigate(-1)}></i>
//           <span>Tranding</span>
//           <Navigation />
//          <Dropdown title="all" options={["tv", "movie", "all"]} func={(e) => setcatogary(e.target.value)} />
//         <Dropdown title="day" options={["week", "day"]} func={(e) => setduration(e.target.value)} />
//         </div>

//         {/* Infinite scroll component */}
//         <InfiniteScroll
//           dataLength={tranding.length}  // Length of the current list
//           next={fetchMoreData}  // Function to load more data
//           hasMore={tranding.length <2000}  // Disable scroll when no more data is available
//           loader={loading ? <h4>Loading...</h4> : null}  // Show loader only when data is being fetched
//           // endMessage={<h1 style={{color:'white'}}>No more data to load</h1>}  // End message when all data is loaded
//         >
//           {/* Render the cards */}
//           {tranding && <Trandingpagecards data={tranding} />}
//         </InfiniteScroll>
//       </div>
//     </>
//   );
// }





// gpt 
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
  let [page, setpage] = useState(100);
  const [hasMore, setHasMore] = useState(true);

  document.title = "TRANDING";
  let navigate = useNavigate();

  // Function to fetch trending data
  async function trandingfun() {
    try {
      setloading(true);

      // Make an API call to get trending data
      let response = await da.get(`/trending/${catagory}/${duration}`, {
        params: { page }
      });

      // Append new results to the previous data
      setTranding((prev) => {
        const newData = response.data.results.filter(
          (item) => !prev.some((existingItem) => existingItem.id === item.id)
        );
        return [...prev, ...newData];
      });

      // If the fetched data is less than expected (like 9), disable further fetching
      if (response.data.results.length < 9) {
        setHasMore(false); // No more data to load
      }

      setloading(false);
    } catch (error) {
      setloading(false);
      console.error(error);
    }
  }

  // Fetch the data when category, duration, or page changes
  useEffect(() => {
    trandingfun();
  }, [catagory, duration, page]);

  // Reset data when category or duration changes
  useEffect(() => {
    setpage(1); // Reset page to 1 when category or duration changes
    setHasMore(true); // Reset hasMore to true
    setTranding([]); // Clear existing data
    trandingfun(); // Fetch new data based on the new filters
  }, [catagory, duration]);

  // Infinite scroll event handler
  async function fetchMoreData() {
    if (hasMore && !loading) {
      setpage((prev) => prev + 1); // Increment the page to fetch the next results
    }
  }

  return (
    <>
      <div className="t-page-main">
        <div className="t-page-heading">
          <i
            className="ri-arrow-left-fill"
            onClick={() => navigate(-1)}
          ></i>
          <span>Tranding</span>
          <Navigation />
          <Dropdown
            title="all"
            options={["tv", "movie", "all"]}
            func={(e) => setcatogary(e.target.value)}
          />

          <Dropdown
            title="day"
            options={["week", "day"]}
            func={(e) => setduration(e.target.value)}
          />
        </div>

        {/* Infinite scroll component */}
        <InfiniteScroll
          dataLength={tranding.length} // Length of the current list
          next={fetchMoreData} // Function to load more data
          hasMore={hasMore} // Disable scroll when no more data is available
          loader={loading ? <h4>Loading...</h4> : null} // Show loader only when data is being fetched
          // endMessage={<h1 style={{ color: "white" }}>No more data to load</h1>} // End message when all data is loaded
        >
          {/* Render the cards */}
          {tranding && <Trandingpagecards data={tranding}  title={catagory}/>}
        </InfiniteScroll>
      </div>
    </>
  );
}
