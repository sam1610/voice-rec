import { useState } from "react";
import PodcastGrid from "./components/PodcastGrid";


export default function App() {
  const [rssFeed, setRssFeed] = useState("https://feeds.simplecast.com/tOjNXec5")
  const [quickFilter, SetQuickFilter] = useState("")
  const [feedUrls, setFeedUrls]= useState([
      {name:" The Evil tester Show", url:"https://feed.pod.co/the-evil-tester-show"},
      {name:"WebRush", url:"https://feeds.simplecast.com/tOjNXec5"}
  ])
  const handleFilterChange = (e) => {
    SetQuickFilter(e.target.value)
  }
//   const handleLoadFeed=()=>{
//     const inputRssFeed= document.getElementById("rssFeedUrl").value;
//     setRssFeed(inputRssFeed);
// }


  return (
    <div className="App">
      <h1> PodCast Player </h1>
      <div>
        <label htmlFor="podcast">Choose a posdcast</label>
        <select name="podcasts"  id="podcasts"  value={rssFeed}
        onChange={e=> setRssFeed(e.target.value)}
        >
          { feedUrls.map(feed=> 
            <option value={feed.url}   
                    key={feed.url}> {feed.name} 
            </option>)}
        </select>
      </div>
      <div>

        <label htmlFor="rssFeedUrl" > Rss FeelURL</label>
        {/* <input type="text" id="rssFeedUrl" name="rssFeedUrl"
        style={{width:"80%"}} value={feedUrl}
          onChange={(e)=> setFeedUrl(e.target.value)}/> 
        <button onClick={handleLoadFeed()}>Load feed</button>*/}
      </div>
      <div>

        <label htmlFor="quickFilter" > Quick Fileter</label>
        <input type="text" id="quickFilter" name="quickFilter"
          value={quickFilter}
          onChange={handleFilterChange}
        />
      </div>
      <PodcastGrid
        rssfeed={rssFeed}
        width="100%"
        height="500px"
        quickFilter={quickFilter}
      />
</div>
  );
}