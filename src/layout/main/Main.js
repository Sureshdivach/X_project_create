import "./main.scss";
import { Route, Routes } from "react-router-dom";
// import { FaEarthAsia } from "react-icons/fa6";
// import { TbPhoto } from "react-icons/tb";
// import { MdOutlineGifBox } from "react-icons/md";
// import { HiOutlineBars2, HiOutlineWallet } from "react-icons/hi2";
// import { RiEmotionHappyLine, RiMapPinLine } from "react-icons/ri";

import MainSecond from "../../common/mainSecondContainer/MainSecond";
import HomeData from "../../common/sidebarpages/home/home";
import ExploreData from "../../common/sidebarpages/explore/Explore";
import NotiData from "../../common/sidebarpages/Notification/notification";
import AllData from "../../common/sidebarpages/Notification/all/all";
import VerifyData from "../../common/sidebarpages/Notification/verified/verified";
import MentData from "../../common/sidebarpages/Notification/mention/mention";
import MessgeData from "../../common/sidebarpages/Message/message";
import GrokData from "../../common/sidebarpages/Grok/Grok";
import BookMark from "../../common/sidebarpages/Bookmark/bookmark";



// import React, { useState } from "react";
const Main = () => {
  return (
    <div className="main">
      
      {/* first container start------------------------------------------------------------ */}
      <div className="first_container">
        <div className="Profile_and_POST_container">
          <div className="profile_container"></div>
          <div className="Post_data_container">
            <Routes>
              <Route path="" element={<HomeData />} />
              <Route path="/home" element={<HomeData />} />
              <Route path="/explore/" element={<ExploreData />} />
              <Route path="/notification/" element={<NotiData />}>
                <Route path="" element={<AllData/>}></Route>
                <Route path="all" element={<AllData />}></Route>
                <Route path="verified" element={<VerifyData/>}></Route>
                <Route path="mention" element={<MentData/>}></Route>
              </Route>
              <Route path="/Message/" element={< MessgeData />} />
              <Route path="/Grok/" element={<GrokData />} />
              <Route path="/Bookmark/" element={<BookMark/>} />
              {/* <Route path="/"element={< ""/>}/>
              <Route path="/"element={< ""/>}/>
              <Route path="/"element={< ""/>}/>
              <Route path="/"element={< ""/>}/>
              <Route path="/"element={< ""/>}/>
              <Route path="/"element={< ""/>}/>
              <Route path="/"element={< ""/>}/>
              <Route path="/"element={< ""/>}/> */}
              {/* <Route path="/Postdatapage" element={<PostData/>}/>
              <Route path="/followingpage" element={<FollowData/>}/> */}
            </Routes>
            
          </div>
        </div>
      </div>

      {/* main second container --------------------------------------------------------------------------------------------------------------------- */}
      <div className="second_container">
        <MainSecond />
      </div>
    </div>
  );
};

export default Main;
