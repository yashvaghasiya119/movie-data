import './compo.css'
import { Navigation } from './top-navigation'
import { Dropdown } from './dropdown'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { da } from './axiosdata'
import { Trandingcard } from './tranding'
import { Trandingpagecards } from './trandingpagecard'


//this is particuler page or path
export function Tranding() {
  let [catagory, setcatogary] = useState("all")
  let [duration, setduration] = useState("day")
  let [tranding, setTranding] = useState(null)
  let [page, setpage] = useState(1)
  document.title = "Tranding"
  let navigate = useNavigate()
  async function trandingfun() {
    try {
      // let d = await da.get(`/trending/${catagory}/${duration}/`)
      let d = await da.get(`/trending/${catagory}/${duration}`, {
        params: {
          page: page
        }
      });

      setTranding(d.data.results);
      console.log(d.data);

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    trandingfun()  
  }, [catagory, duration, page])
  console.log(tranding);

  function clickbtn(){
    setpage(page - 1 )
    window.scrollBy({top:-8000,left:23,behavior:"smooth"})
  }

  return <>
    <div className="t-page-main">
      <div className="t-page-heading">
        <i class="ri-arrow-left-fill" onClick={() => navigate(-1)}></i>
        <span>Tranding</span>
        <Navigation />
        <Dropdown title="filter" options={["tv", "movie", "all"]} func={(e) => setcatogary(e.target.value)} />
        <Dropdown title="filter" options={["week", "day"]} func={(e) => setduration(e.target.value)} />
      </div>
      <Trandingpagecards data={tranding} />
    
    <div className="pagebutton">
      <button onClick={clickbtn} disabled={page<=1} id='top1'>Prev</button>
      <h3>{page}</h3>
      <button onClick={()=>setpage(page+1)} id='top'>Next</button>
    </div>
    </div>
  </>
}


