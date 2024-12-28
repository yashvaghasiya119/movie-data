import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { da } from "./axiosdata";
import { Navigation } from "./top-navigation";
import { Dropdown } from "./dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "./loading";
import './compo.css'
import { Trandingpagecards } from "./trandingpagecard";

export function Populer() {

    let [catagory, setcatogary] = useState("movie");
    let [popular, setpopular] = useState([]);
    let [loading, setloading] = useState(false);
    let [page, setpage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    document.title = "Popular";
    let navigate = useNavigate()


    // Function to fetch trending data
    async function populerfunc() {
        try {
            setloading(true);
            // Make an API call to get trending data
            let response = await da.get(`/${catagory}/popular`, {
                params: { page }
            });

            setpopular((prev) => {
                const newData = response.data.results.filter(item => !prev.some(existingItem => existingItem.id === item.id));
                return [...prev, ...newData];
            });
            // If the fetched data is less than the limit (e.g., 9), disable further fetching
            if (response.data.results.length < 9) {
                setHasMore(false);
            }

            setloading(false);
        } catch (error) {
            setloading(false);
            console.error(error);
        }
    }

    // Fetch the data when category, duration, or page changes
    useEffect(() => {
        populerfunc();
    }, [catagory, page]);
    useEffect(() => {
        setpage(1); // પૃષ્ઠને 1 પર રીસેટ કરો
        setHasMore(true);  // hasMore ને ફરીથી સેટ કરો
        setpopular([]);  // જૂના ડેટાને સાફ કરો
        populerfunc();  // નવા ફિલ્ટર પર આધારિત ડેટા ફેચ કરો
    }, [catagory]);
    // Infinite scroll event handler
    async function fetchMoreData() {
        if (hasMore && !loading) {  // Only fetch more if no fetch is in progress
            setpage((prev) => prev + 1);  // Increment the page to fetch next results
        }
    }
    return <>
        <div className="t-page-main">
            <div className="t-page-heading">
                <i className="ri-arrow-left-fill" onClick={() => navigate(-1)}></i>
                <span>Populer</span>
                <Navigation />
                <Dropdown title="Shows" options={["tv", "movie", "all"]} func={(e) => setcatogary(e.target.value)} />
            </div>

            {/* Infinite scroll component */}
            <InfiniteScroll
                dataLength={popular.length}  // Length of the current list
                next={fetchMoreData}  // Function to load more data
                hasMore={popular.length < 500}  // Disable scroll when no more data is available
                loader={loading ? <h4>Loading...</h4> : null}  // Show loader only when data is being fetched
            // endMessage={<h1 style={{color:'white'}}>No more data to load</h1>}  // End message when all data is loaded
            >
                {popular && <Trandingpagecards data={popular} title="people"/>}
            </InfiniteScroll>
        </div>
    </>
}