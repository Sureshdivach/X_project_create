import { useMemo, useState } from "react";
import "./liveon.scss";
// import { useState } from "react";
// import { HiDotsHorizontal } from "react-icons/hi";

const liveObj = {
  heading: "Live on X",
  Data: [
    {
      ProfileImg:
        "https://w7.pngwing.com/pngs/776/349/png-transparent-television-channel-captain-news-tamil-sun-tv-news-miscellaneous-television-trademark-thumbnail.png",
      Name: "News",
      label: "News TV LIVE",
      live: "+2.3k",
    },
    {
      ProfileImg:
        "https://w1.pngwing.com/pngs/872/719/png-transparent-tv-nepal-news-24-television-television-channel-nepal-television-live-television-streaming-television.png",
      Name: "news-24",
      label: " news-24 Live for upto date",
      live: "+2k",
    },
    {
      ProfileImg:
        "https://e7.pngegg.com/pngimages/3/57/png-clipart-india-news-news-broadcasting-television-news-television-logo.png",
      Name: "India News",
      label: "India News Live",
      live: "+358",
    },
  
    {
      ProfileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzcVaDCGNvoSZn1aNiLpTnU3HIx9JArTUAzQ&s",
      Name: "Z news",
      label: "Z news  Live",
      live: "+5M",
    },
    {
      ProfileImg:
        "https://logowik.com/content/uploads/images/zee-news1656.logowik.com.webp",
      Name: "zee-news",
      label: "zee-news  Live",
      live: "+298",
    },
    {
      ProfileImg:
        "https://seeklogo.com/images/Z/zee-tv-new-2017-logo-BF523E8B60-seeklogo.com.png",
      Name: "zee-tv",
      label: "zee-tv  Live",
      live: "+3.1M",
    },
    {
      ProfileImg: "https://banner2.cleanpng.com/20180529/lbh/avpq8fgzf.webp",
      Name: "AAJ Tak",
      label: "AAJ Tak  Live",
      live: "+2.3k",
    },
    {
      ProfileImg:
        "https://w7.pngwing.com/pngs/267/885/png-transparent-first-india-news-quality-mark-trust-asomiya-pratidin-television-channel-1st-miscellaneous-television-angle.png",
      Name: "First India",
      label: "First India  Live",
      live: "+10k",
    },
    {
      ProfileImg:
        "https://logowik.com/content/uploads/images/bbc-world-news6618.jpg",
      Name: "BBC News",
      label: "BBC News Live",
      live: "+5.2k",
    },
  ],
};
const LiveOnX = () => {
  const [showmoreLive,setShowMoreLive]=useState(0)
  const _liveArr=useMemo(()=>{
    let counter= showmoreLive +1;
    let _dataarr= liveObj.Data.slice(0,3*counter)
    return _dataarr;
  },[showmoreLive])
  const _Liveusestatus= _liveArr?.length>=liveObj.Data?.length;

  return (
    <div className="Live_on w-100  p-0 mt-0 ">
      <h3>{liveObj.heading}</h3>
      {_liveArr.map((ele) => {
        return (
          <div class="d-flex justify-content-between w-100 p-0">
            <div>
              <img
                src={ele.ProfileImg}
                style={{ width: "40px", height: "40px", borderRadius: "40px" }}
                alt=""
              />
              &nbsp;<span>{ele.Name}</span>{" "}
              <span style={{ fontSize: "small" }}>
                {" "}
                <img
                  src="https://img.icons8.com/?size=48&id=2sZ0sdlG9kWP&format=png"
                  style={{ width: "10px", height: "10px" }}
                  alt=""
                />{" "}
                is hosting{" "}
              </span>
              <p>{ele.label}</p>
            </div>
            <div>
              <div class="badge  text-wrap border border-3 border-danger rounded-pill  ">
                <img
                  src={ele.ProfileImg}
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "60px",
                  }}
                  alt=""
                />{" "}
                <span class="font-size-1">{ele.live}</span>
              </div>
              <div>
                
              </div>
            </div>
           
          </div>
          //  <button> see more</button>
        );
        
      })}

<div> 
  <button onClick={()=>{setShowMoreLive((prev)=>(_Liveusestatus ? 0 : prev+1))}}>
   { _Liveusestatus ? "See Less":"Show more"}</button></div>
    </div>
   
  );
};
export default LiveOnX;
