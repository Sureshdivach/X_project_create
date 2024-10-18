import "./foryoup.scss"
import { HiOutlineDotsHorizontal } from "react-icons/hi";
const explrObj={
    exarr:[
     {
       title:"#INDvsBAN",
       label:"Sports.Treding",
       Like:"15.7k posts",
   
     },
     {
       title:"#SinhamAgainTrailer",
       label:"Entertainment.Treding",
       Like:"Treding with #AkshayKumar,#AjayDevgn",
     },
     {
       title:"#IranAttack",
       label:"Trending",
       Like:"13.5k posts",
     },
    
    ],
    exarr2:[
      {
        title:"#RajatDalal",
        label:"Entertainment.Trending",
        Like:"14.8k posts",
      },
      
      
      {
        title:"#KarachiBlast",
        label:"Treding in India",
        Like:"3790 posts",
      },
      {
        title:"Zakir Naik",
        label:"trending",
        Like:"21.4k posts",
      },
      {
        title:"Zakir Naik",
        label:"trending",
        Like:"21.4k posts",
      },
      {
        title:"#SinhamAgainTrailer",
        label:"Entertainment.Treding",
        Like:"Treding with #AkshayKumar,#AjayDevgn",
      },
      {
        title:"#IranAttack",
        label:"Trending",
        Like:"13.5k posts",
      },
    ],
    heading:"Videos for you",
     label:"check out these popular and trending videos for you",
    
    vidarr:[
   
     {
       url:"https://videos.pexels.com/video-files/6952660/6952660-uhd_1440_2560_30fps.mp4"
     },
     {
       url:"https://videos.pexels.com/video-files/7235780/7235780-sd_360_640_30fps.mp4"
     },
     {
       url:"https://videos.pexels.com/video-files/7850631/7850631-sd_360_640_30fps.mp4"
     },
     {
       url:"https://videos.pexels.com/video-files/4762419/4762419-sd_506_960_24fps.mp4"
     },
   
    ],
   
   } 

const ForYouData=()=>{
    return(
<div>
<div className="img_cont" style={{width:"100%",height:"450px"}}>
      <h5>AMAs 50th Anniversary Special</h5> <br/>
    <p>Awards Show .2 hours ago</p>    
</div>

 <div className="expl_trading_data_cont " style={{marginTop:"1rem",padding:"10px"}}>
   {explrObj.exarr.map(ele=>{
    return <div class="d-flex justify-content-between ">
      <div style= {{ lineHeight:"1" , fontSize:"large"}}>
       <span style={{}}> {ele.label}</span>
       <h5>{ele.title}</h5>
       <p>{ele.Like}</p>
      </div>
      <div><HiOutlineDotsHorizontal /></div>
    </div>
   })
   }

   <div className="expl_video_cont "> <hr/>
   <div><h4>{explrObj.heading}</h4>
    <p>{explrObj.label}</p>
  </div>

    <div className="video_cont">
      {explrObj.vidarr.map(xyz=>{      
      return <div className="expl_video_cont " style={{width:"100%"}}>      
       {<video  src={xyz.url}  loop autoPlay muted />}
       </div>         
    })}
   </div>
   </div>
   <hr/>
    <div>
    {explrObj.exarr2.map(ele=>{
    return <div class="d-flex justify-content-between ">
      <div style= {{ lineHeight:"1" , fontSize:"large"}}>
       <span style={{}}> {ele.label}</span>
       <h5>{ele.title}</h5>
       <p>{ele.Like}</p>
      </div>
      <div><HiOutlineDotsHorizontal /></div>
    </div>
   })
   }
    </div>   
 </div>
</div>
    );
}
export default ForYouData;