import "./side.scss";
import { GoHome } from "react-icons/go";
import { FaExternalLinkSquareAlt, FaSearch } from "react-icons/fa";
import { GrNotification } from "react-icons/gr";
import { CiMail } from "react-icons/ci";
import { BsLightningCharge, BsSlashSquare } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { LiaToolboxSolid } from "react-icons/lia";
import { IoClose, IoPeople } from "react-icons/io5";
import { FaEarthAsia, FaXTwitter } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { HiDotsCircleHorizontal, HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiEmotionHappyLine, RiFileListLine, RiMic2Line } from "react-icons/ri";
import { PiMoneyBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbPhoto } from "react-icons/tb";
import { MdOutlineGifBox } from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";
import { HiOutlineBars2, HiOutlineWallet} from "react-icons/hi2";
import { IoMdLock } from "react-icons/io";

import LinkList from "../../common/Linklist/LinkList";


const sidebarData = {
 
  heading: <FaXTwitter/>,
  arr: [
    {id:"", icon: <GoHome />, label: "Home" },
    { id:"explore", icon: <FaSearch />, label: "Explore" },
    {id:"notification", icon: <GrNotification/>, label: "Notifications" },
    { id:"Message",icon: <CiMail />, label: "Messages" },
    {id:"Grok", icon: <BsSlashSquare />, label: "Grok" },
    { id:"Bookmark",icon: <BiBookmark />, label: "Bookmarks" },
    { id:"Jobs",icon: <LiaToolboxSolid />, label: "Jobs" },
    {id:"Communities", icon: <IoPeople />, label: "Communities" },
    { id:"Premium",icon: <FaXTwitter />, label: "Premium" },
   {id:"Verified Orgs", icon: <BsLightningCharge />, label: "Verified Orgs" },
    {id:"Profile", icon: <IoPersonOutline />, label: "Profile" },
    
  ],
  more:[
    { icon: <RiFileListLine />, label: " Lists" },
    { icon:<PiMoneyBold />, label: "Monetization" },
    { icon:  <FaExternalLinkSquareAlt />, label: " Ads" },
    { icon: <LiaToolboxSolid />, label: "Jobs" },
    { icon: <RiMic2Line />, label: "Create Your Space" },
    { icon: <IoSettingsOutline />, label: " Settings and privacy" },
      ],
  Profile: [
    {icon:"https://pbs.twimg.com/profile_images/1421307359565996032/G5aCuSYO_400x400.jpg",
      user:"SureshChoudhary ",label:"@SURESHK5866152545",
      p:"add an existing account",
      log:"Log @SURESHK5866152545"
    }
  ],
};

const Side = () => {

  return (
    <div className="aside">
      <div className="firstaside"></div>
      <div className="asidefirst">
        <h2>{sidebarData.heading}</h2>
        
        {/* {sidebarData.arr.map((ele) => {
          return ( */}
            <li>
<LinkList linkArr={sidebarData.arr} containerclass={"asidefirst"} linkClass={`button `}/>
              {/* <Link to={"ele.id"}>
                {ele.icon} &nbsp;{ele.label}
              </Link> */}
            </li>
          {/* );
        })} */}

        <div class="dropup-right dropup">
          <button
            class="btn3 btn-secondary "type="button" data-bs-toggle="dropdown"aria-expanded="false">
            <HiDotsCircleHorizontal /> More </button>
          <ul class="dropdown-menu">
          {sidebarData.more.map((el) => {
          return (
            <li>
              <a class="dropdown-item" href=" ">
                {el.icon} &nbsp;{el.label}
              </a>
            </li>
          );
        })}           
          </ul>
        </div>
        {/* post button--------------------------------------------------------------- */}
        {/* <!-- Button trigger modal --> */}
        <button
          type="button" class="btn1 "data-bs-toggle="modal"data-bs-target="#exampleModal"         >
          Post
        </button>
        {/* <!-- Modal --> */}
        <div class="modal fade"  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btnclose"data-bs-dismiss="modal" aria-label="Close"> <IoClose /> </button>
                <h1 class="modal-title fs-5" id="exampleModalLabel" color="green"> Drafts </h1>                
              </div>
              <div class="modal-body"><img src='https://pbs.twimg.com/profile_images/1421307359565996032/G5aCuSYO_400x400.jpg' alt=''/> <input type='text' placeholder="What is happening?!"/>
               <br/> <br/> <p> &nbsp; <FaEarthAsia /> &nbsp; Everyone can reply</p>
              </div>
              <div class="modal-footer">
                <div class="icon">
                  <span><TbPhoto  title="Media"/></span>
                  <span><MdOutlineGifBox title="GIF" /></span>
                  <span><HiOutlineBars2  title="poll"/></span>
                  <span><RiEmotionHappyLine title="Emoji" /></span>
                  <span><HiOutlineWallet title="Schedule" /></span>
                  <span><RiMapPinLine  title="location"/></span>
                </div>
                <button type="button" class="btn2 btn-primary">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="dropup-left dropup">
          <button
            class="btn btn-secondary"type="button" data-bs-toggle="dropdown"aria-expanded="false">
            {sidebarData.Profile.map((el) => {
          return (
            <div class="container ">           
              <div class="col">
              <img src={el.icon} alt='' class="profileimg"/>
              </div>
              <div class="col">
              <h6>{el.user} <IoMdLock /> </h6>
              <br/>
              <p> {el.label} </p>
              </div>
              <div class="col">
              <span><HiOutlineDotsHorizontal /></span>
              </div>
            
          </div>           
           
          );
        })}            
           </button>
          <ul class="dropdown-menu">
          {sidebarData.Profile.map((el) => {
          return (
            <li>
              <a class="dropdownlink" href=" ">
                {el.p} &nbsp; <br/><br/>{el.log}
              </a>
            </li>
          );
        })}           
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Side;
