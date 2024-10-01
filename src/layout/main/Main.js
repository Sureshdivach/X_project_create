import "./main.scss";
import { Link, Route,Routes } from "react-router-dom";
import { FaEarthAsia } from "react-icons/fa6";
import { TbPhoto } from "react-icons/tb";
import { MdOutlineGifBox } from "react-icons/md";
import { HiOutlineBars2, HiOutlineWallet } from "react-icons/hi2";
import { RiEmotionHappyLine, RiMapPinLine } from "react-icons/ri";
import PostData from "../../common/Postdatapage/PostData";
import FollowData from "../../common/followingpage/Following";
import MainSecond from "../../common/mainSecondContainer/MainSecond";



// import React, { useState } from "react";
const Main = () => {
  return (
    
    <div className="main">
      {/* first container start------------------------------------------------------------ */}
      <div className="first_container">
     
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">
              <Link to="/Postdatapage"  class="link-light active
              " >
                For you
              </Link>
            </div>
            <div class="col">
              <Link to="/followingpage " class="link-light ">
                Following
              </Link>
            </div>
            </div>
        </div>
        <div className="Profile_and_POST_container">
        <div className="profile_container">
          <div class="modal-content">
            <div class="modal-body">
              <img
                src="https://pbs.twimg.com/profile_images/1421307359565996032/G5aCuSYO_400x400.jpg"
                alt=""
              />
              <input type="text" placeholder="What is happening?!" />
              <br />{" "}
              <p>
                {" "}
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <FaEarthAsia />{" "}
                &nbsp; Everyone can reply
              </p>
            </div>
            <div class="modal-footer">
              <div class="icon">
                <span>
                  <TbPhoto title="Media" />
                </span>
                <span>
                  <MdOutlineGifBox title="GIF" />
                </span>
                <span>
                  <HiOutlineBars2 title="poll" />
                </span>
                <span>
                  <RiEmotionHappyLine title="Emoji" />
                </span>
                <span>
                  <HiOutlineWallet title="Schedule" />
                </span>
                <span>
                  <RiMapPinLine title="location" />
                </span>
              </div>
              <button type="button" class="btn2 btn-primary">
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="Post_data_container">
          {/* <PostData/> */}
          <Routes>
              <Route path="/" element={<PostData/>}/>
              <Route path="/Postdatapage" element={<PostData/>}/>
              <Route path="/followingpage" element={<FollowData/>}/>
              </Routes>
        </div>
        </div>
      </div>

      {/* main second container --------------------------------------------------------------------------------------------------------------------- */}
      <div className="second_container">
        < MainSecond/>
      </div>
    </div>
   
  );
};

export default Main;
