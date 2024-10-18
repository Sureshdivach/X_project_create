// import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import "./explore.scss"

import { IoSettingsOutline } from "react-icons/io5";
import ForYouData from "./explore_inner_pages/foryoupage/exForyou";
import TradData from "./explore_inner_pages/trading/Trading";
import NewsData from "./explore_inner_pages/newspage/new";
import SportsData from "./explore_inner_pages/sportspage/sport";
import EntainData from "./explore_inner_pages/Entertainment/Entertainment";
import { IoArrowBack } from "react-icons/io5";
import { useState } from "react";
const ExploreData=()=>{
const [backbtnshow,SetBackBtnShow]=useState(false)
    return(
    <div class="explore">
      <div className="navsearch_icon">
      <div className="search_container"> 
     {backbtnshow && <button className="btn" onClick={()=>{SetBackBtnShow(false)}}><IoArrowBack/> </button> }
        <div className={`input_con ${backbtnshow ?  'focused':''}`}>
          <IoMdSearch />
          <input type='text' placeholder="Search" onClick={()=>{SetBackBtnShow(true)}} /> 
        </div> 
       { !backbtnshow && <IoSettingsOutline  onClick={()=>{SetBackBtnShow(true)}} />}
      </div>
      <div className="explore_nav_tabes">       
        <ul class="nav nav-pills mb-3 d-flex justify-content-around" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation" >
    <button class="nav-link active "   id="pills-foryou-tab" data-bs-toggle="pill" data-bs-target="#pills-foryou" type="button" role="tab" aria-controls="pills-foryou" aria-selected="true">foryou</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Trending</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">News</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Sports</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Entertainment</button>
  </li>
</ul>
</div> 
</div>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-foryou" role="tabpanel" aria-labelledby="pills-foryou-tab" tabindex="0"><ForYouData/> </div>
  <div class="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0"><TradData/></div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0"><NewsData/></div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0"><SportsData/></div>
  <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0"><EntainData/></div>
</div>
 </div>
      
    )
    
}
export default ExploreData;