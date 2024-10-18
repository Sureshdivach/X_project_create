import { HiOutlineDotsHorizontal } from "react-icons/hi"
import "./news.scss"
const NewsObj={
    newsarr:[
        {
            title:"#INDvsBAN",
            label:" 1. Sports.Treding",
            Like:"15.7k posts",
        
          },
          {
            title:"#SinhamAgainTrailer",
            label:"2. Entertainment.Treding",
            Like:"Treding with #AkshayKumar,#AjayDevgn",
          },
          {
            title:"#IranAttack",
            label:"3. Trending",
            Like:"13.5k posts",
          },
          {
              title:"#RajatDalal",
              label:"4. Entertainment.Trending",
              Like:"14.8k posts",
            },
            
            
            {
              title:"#KarachiBlast",
              label:"5. Treding in India",
              Like:"3790 posts",
            },
            {
              title:"Zakir Naik",
              label:"6. trending",
              Like:"21.4k posts",
            },
            {
              title:"Zakir Naik",
              label:"7. trending",
              Like:"21.4k posts",
            },
            {
              title:"#SinhamAgainTrailer",
              label:"8. Entertainment.Treding",
              Like:"Treding with #AkshayKumar,#AjayDevgn",
            },
            {
              title:"#IranAttack",
              label:"9. Trending",
              Like:"13.5k posts",
            },
            {
              label: " 10. Trending in india",
              title: "#1st india news",
              Like: "5,232 posts",
             
            },
            {
              label: "11. Poliics.Trending",
              title: "#RahulGandhi",
              Like: "18.2K posts",
            
            },
            {
              label: "12. trending ",
              title: "#Rand",
              Like: "5,513 posts",
              
            },
            {
              label: "13. Poliics.Trending",
              title: "#amitshaah",
              Like: "22.2K posts",
             
            },
            {
              label: "14. Entertainment.Trending",
              title: "#LawrenceBishnoi",
              Like: "16k posts",
             
            },
            {
              label: "15. Business & finance.Trending",
              title: "Big 8",
              Like: "30.8K posts",
             
            },
         ], 
  }
  
  const NewsData=()=>{
      return<div className="expl_trading_data_cont " style={{marginTop:"1rem",padding:"10px"}}>
          {NewsObj.newsarr.map(ele=>{
           return <div class="d-flex justify-content-between ">
             <div style= {{ lineHeight:"2" , fontSize:"large"}}>
              <span style={{}}> {ele.label}</span>
              <h5>{ele.title}</h5>
              <p>{ele.Like}</p>
             </div>  
             <div><HiOutlineDotsHorizontal /></div>
           </div>
          })
          }
        
          </div>
      
  }
  


export default NewsData;