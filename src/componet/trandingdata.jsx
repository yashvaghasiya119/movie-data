import './compo.css'
import { Navigation } from './top-navigation'
import { Dropdown } from './dropdown'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { da } from './axiosdata'
import { Trandingcard } from './tranding'
import { Trandingpagecards } from './trandingpagecard'

export function Tranding() {
    let [catagory,setcatogary]=useState("all")
    let [duration,setduration]=useState("day")
    let [tranding,setTranding]=useState(null)
document.title = "Tranding"
    let navigate = useNavigate()
     async function trandingfun() {
        try {
          let d = await da.get(`/trending/${catagory}/${duration}`);
          setTranding(d.data.results);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(()=>{
        trandingfun()
      },[catagory,duration])
      console.log(tranding);
      
    return <>
        <div className="t-page-main">
            <div className="t-page-heading">
                <i class="ri-arrow-left-fill" onClick={()=>navigate(-1)}></i>
                <span>Tranding</span>
                <Navigation/>
                <Dropdown title="filter" options={["tv","movie","all"]}  func={(e)=>setcatogary(e.target.value)} />
                <Dropdown title="filter" options={["week","day"]}  func={(e)=>setcatogary(e.target.value)} />
                </div>
                <Trandingpagecards data={tranding}/>
        </div>
    </>
}


