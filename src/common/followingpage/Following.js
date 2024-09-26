import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";
import { CgSoftwareUpload } from "react-icons/cg";
import { FcLikePlaceholder } from "react-icons/fc";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { IoStatsChartOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";

const followObj = {
  Post: [
    {
        postimg:"https://pbs.twimg.com/profile_images/1561248901117923328/To5m8vSP_400x400.png",
        name: "NDTV",
        Profiletag: "@NDTV",
        label:"Manu Bhaker, Trolled For Wearing Paris Olympic Medals, Gives Fiery Reply",
        date_time: "4h",
        type: "image",
        postUrl:"https://c.ndtvimg.com/2024-09/mfrllnn_manu-bhaker_625x300_25_September_24.jpeg",
      },
    {
      postimg:"https://english.cdn.zeenews.com/static/apprun/livetv/Jhar.svg",
      name: "ZEEnews",
      Profiletag: "@ZEEnews",
      label:"BREAKING | Jaipur news: SMS अस्पताल की लिफ्ट रही 2 घंटे बंद, कडी मशक्कत के बाद मरीजों को निकाला गया",
      type: "image",
      postUrl:"https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2024/09/25/00000003_31.jpg?itok=mloWU546",
    },
    
      {
        postimg:"https://pbs.twimg.com/profile_images/1835906195283947521/rFz7mg-O_400x400.jpg",
        name: "Gates Foundation India",
        Profiletag: "@BMGFIndia",
        label:"Official India account of Bill & Melinda Gates Foundation. We work with India’s governments and partners to reduce inequity and eradicate disease.",
        date_time: "5 hrs",
        type: "image",
        postUrl:"https://www.gatesfoundation.org/-/media/gfo/4our-work/places/india_ad_ga14635370_sk608793_1600x900.jpg?rev=45509fbf5abc4354b16ce95fb954ee90&w=800&hash=CC87C8672641AB43CC883B4A59E337C2",
      },
      {
        postimg:"https://pbs.twimg.com/profile_images/1448817215071948813/SsfTxFZG_400x400.jpg",
        name: "Raelian Movement",
        Profiletag: "@raelian",
        label:"मिसाल क़ायम करने के लिए, अपना रास्ता स्वयं बनाना होता है।",
        date_time: "Live",
        type: "image",
        postUrl:"https://pbs.twimg.com/media/GYOesP4akAQ54vO?format=jpg&name=900x900",
      },
      {
        postimg:"data:image/jpeg;base64,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",
        name: "ICC",
        Profiletag: "@ICC",
        label:"महिला क्रिकेट:चीफ सिलेक्टर हेमलता ने कहा- भारतीय टीम फाइनल का दबाव नहीं झेल पाती, इसलिए आज तक बड़ा आईसीसी टूर्नामेंट नहीं जीत पाई",
        date_time: "6 hrs",
        type: "image",
        postUrl:"https://images.bhaskarassets.com/web2images/521/2020/07/10/women-cricket-final_1594392171.png",
      },
  ],
};

const FollowData = () => {
  return followObj.Post.map((ele) => {
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
export default FollowData;