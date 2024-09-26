
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";
import { CgSoftwareUpload } from "react-icons/cg";
import { FcLikePlaceholder } from "react-icons/fc";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { IoStatsChartOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";

const postObj = {
  Post: [
    {
      postimg:"https://pbs.twimg.com/profile_images/1683501992314798080/xl1POYLw_400x400.jpg",
      name: "Developers",
      Profiletag: "@XDevelopers",
      label:"The voice of the X Dev team and your official source for updates, news, and events, related to the X API.",
      date_time: "Mar 19",
      type: "image",
      postUrl:"https://cdn.cms-twdigitalassets.com/content/dam/developer-twitter/x-redesign-2024/1.png.twimg.2560.png",
    },
    {
      postimg:"https://pbs.twimg.com/profile_images/1689630465047834624/luiyC3hT_400x400.jpg",
      name: "ABP News",
      Profiletag: "@ABPNews",
      label:"BREAKING |  कंगना के बयान से BJP ने किया किनारा- राकेश टिकैत बोले- 'कंगना को पद बड़ा मिल गया पर बचपना है', देखिए, 'आगे का एजेंडा',@romanaisarkhan के साथ,@gauravbhatiabjp | @RakeshTikaitBKU |  http://abplive.com/live-tv #KanganaRanaut #BJP #Farmers #FarmLaws",    date_time: "6 hrs",
      type: "image",
      postUrl:"https://feeds.abplive.com/onecms/images/uploaded-images/2024/09/13/eaa6f29a44e2d55eb691aceb747eeaa41726230428223487_original.jpg?impolicy=abp_cdn&imwidth=1200&height=675",
    },
    {
        postimg:"https://pbs.twimg.com/profile_images/1823279865367273472/8iTxH12E_400x400.jpg",
        name: "Atishi",
        Profiletag: "Atishi",
        label:"कनॉट प्लेस स्थित प्राचीन हनुमान मंदिर में हनुमानजी का आशीर्वाद लिया। LIVE",
        date_time: "4h",
        type: "video",
        postUrl:"https://cdn.pixabay.com/video/2023/10/17/185359-875417507_tiny.mp4",
      },
      {
        postimg:"https://media.istockphoto.com/id/1785918657/photo/portrait-of-doctor-with-smile-confidence-and-hospital-employee-with-care-support-and-trust.webp?a=1&b=1&s=612x612&w=0&k=20&c=W1GiwVg-lhqH2mm8_hDuR_fJLskO72NDS0ebPWaDs2Q=",
        name: "Suresh Kumar Sharma",
        Profiletag: "@Suresh Kumar",
        label:"तरक्कियों की दौड़ में उसी का जोर चल गया,बना के रास्ता जो भीड़ से निकल गया।",
        date_time: "2 hrs",
        type: "image",
        postUrl:"https://media.istockphoto.com/id/1443254429/photo/indian-young-woman-counting-money-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=8qjbdydWycLLMP-2xNAxTA6hZo19D_rzMZgE0VyxU5w=",
      },
      {
        postimg:"https://img.freepik.com/free-photo/afro-man-with-thumb-up_1368-6876.jpg?size=626&ext=jpg&ga=GA1.1.168268601.1703658596&semt=ais_hybrid",
        name: "Mukesh Kumar",
        Profiletag: "@mkchoudharty",
        label:"मिसाल क़ायम करने के लिए, अपना रास्ता स्वयं बनाना होता है।",
        date_time: "Live",
        type: "video",
        postUrl:"https://videos.pexels.com/video-files/5855743/5855743-hd_1920_1080_30fps.mp4",
      },
      {
        postimg:"https://pbs.twimg.com/profile_images/1652654875942047745/qYTBv0Bo_400x400.jpg",
        name: "Jaiky Yadav",
        Profiletag: "@JaikyYadav16",
        label:"हमेशा खुद पर विश्वास रखना,क्योंकि एक पेड़ पर बैठा पक्षी,कभी भी डाल टूटने से नहीं डरता है,क्योंकि उसका भरोसा डाल पर नहीं,वल्कि खुद के पंखों पर होता है…!!",
        date_time: "6 hrs",
        type: "image",
        postUrl:"https://pbs.twimg.com/media/GYNdOHWXAAA8nZj?format=jpg&name=small",
      },
  ],
};

const PostData = () => {
  return postObj.Post.map((ele) => {
    return (
      <div className="Post_child">
        <div className="Profile_img_container">
          <img src={ele.postimg} alt="" />
        </div>
        <div className="Post_container">
          <div className="Post_title_container">
            <div className="title">
              <b>{ele.name}</b>
              <span>
                {" "}
                &nbsp;
                <img
                  src="https://img.icons8.com/?size=48&id=2sZ0sdlG9kWP&format=png"
                  alt=""
                />{" "}
                {ele.Profiletag} . {ele.date_time}
              </span>{" "}
            </div>
            <div>
             <b><HiDotsHorizontal /></b>  
            </div>
          </div>
          <div className="Post_video_img_container">
            <p>{ele.label}</p>       
           { ele.type === "image"?(
 <img src={ele.postUrl} alt=''/>
           ):ele.type === "video"?(
            <video  controls loop >
             <source src={ele.postUrl} type="video/mp4"></source>
            </video>
           ):null              
               }
            <div className="comment_container">
                <p><FaRegComment title="Reply" /><span> 6.3k</span></p>
                <p><HiMiniArrowPathRoundedSquare title="Repost"/><span> 3.6k</span></p>
                <p><IoStatsChartOutline  title="View"/><span> 2M</span></p>
                <p><FcLikePlaceholder title="Like" /><span> 30k</span></p>
                <p><CiBookmark title="bookmark" /> <CgSoftwareUpload  title="upload"/><span></span></p>
            </div>
                
          </div>

        </div>
      </div>
    );
  });
};
export default PostData;
