import FollowData from "../../followingpage/Following";
import PostData from "../../Postdatapage/PostData";
import { FaEarthAsia } from "react-icons/fa6";
import { TbPhoto } from "react-icons/tb";
import { MdOutlineGifBox } from "react-icons/md";
import { HiOutlineBars2, HiOutlineWallet } from "react-icons/hi2";
import { RiEmotionHappyLine, RiMapPinLine } from "react-icons/ri";
const HomeData = () => {
  return (
    <div>
      <nav class="sticky-top text-white border-0 bg-dark">
        <div
          class="nav nav-tabs w-100  border-0 d-flex justify-content-evenly  "
          id="nav-tab"
          role="tablist"
        >
          <button
            class="nav-link active  text-white bg-dark border-0 border-bottom-primary   "
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Foryou
          </button>
          <button
            class="nav-link text-white bg-dark  border-0 "
            id="nav-profile-tab "
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            following
          </button>
        </div>
      </nav>

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

      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <PostData />
        </div>
        <div
          class="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <FollowData />
        </div>
      </div>
    </div>
  );
};
export default HomeData;
