import { useState } from "react";
import "./Whats.Happend.scss";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const WhatsObj = {
  happend: [
    {
      label: "Trending in india",
      tag: "#1st india news",
      Posts: "5,232 posts",
      dot: <HiOutlineDotsHorizontal />,
    },
    {
      label: "Poliics.Trending",
      tag: "#RahulGandhi",
      Posts: "18.2K posts",
      dot: <HiOutlineDotsHorizontal />,
    },
    {
      label: "Entertainment.Trending",
      tag: "#LawrenceBishnoi",
      Posts: "10k posts",
      dot: <HiOutlineDotsHorizontal />,
    },
    {
      label: "Business & finance.Trending",
      tag: "Big 4",
      Posts: "30.8K posts",
      dot: <HiOutlineDotsHorizontal />,
    },
  ],
  colleps:[
    {
        label: "trending ",
        tag: "#Rand",
        Posts: "5,513 posts",
        dot: <HiOutlineDotsHorizontal />,
      },
      {
        label: "Poliics.Trending",
        tag: "#amitshaah",
        Posts: "22.2K posts",
        dot: <HiOutlineDotsHorizontal />,
      },
      {
        label: "Entertainment.Trending",
        tag: "#LawrenceBishnoi",
        Posts: "16k posts",
        dot: <HiOutlineDotsHorizontal />,
      },
      {
        label: "Business & finance.Trending",
        tag: "Big 8",
        Posts: "30.8K posts",
        dot: <HiOutlineDotsHorizontal />,
      },
  ]
};
const WhatHappend = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <h4>What's happening</h4> <br />
      <div class="d-flex ">
        <div class="flex-shrink-0">
          <img
            src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600"
            style={{ width: " 70px", height: "70px", borderRadius: "10px" }}
            alt=" ..."
          />
        </div>
        <div class="flex-grow-1 ms-3">
          <h6>
            {" "}
            <b>
              {" "}
              Milan Fashion Week 2024 <br /> Womenswear SS25
            </b>
          </h6>
          <p>Fashion . LIVE</p>
        </div>
      </div>
      {WhatsObj.happend.map((ele) => {
        return (
          <div class="d-flex">
            <div class="w-100 ">
              <span
                class="--bs-dark-bg-subtle
                "
              >
                {ele.label}
              </span>
              <h5>{ele.tag}</h5>
              <p>{ele.Posts}</p>
            </div>
            <div class="w-10">
              <h5>{ele.dot}</h5>
            </div>
          </div>
        );
      })}

      {/* see more and see less collapse ---------------------------------------------------- */}
      <div  id="collapseExample" class="card card-body collapse p-0" style={{ backgroundColor: "black" }}>        
          {WhatsObj.colleps.map((ele) => {
            return (
              <div class="d-flex w-100 ">
                <div class="w-100 ">
                  <span
                    class="--bs-dark-bg-subtle
                "
                  >
                    {ele.label}
                  </span>
                  <h5>{ele.tag}</h5>
                  <p>{ele.Posts}</p>
                </div>
                <div class="w-10">
                  <h5>{ele.dot}</h5>
                </div>
              </div>
            );
          })}
        
      </div>
      <a
        class="btn btn-link text-decoration-none btn-lg"
        data-bs-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show less":"Show more" }
      </a>
      
    </div>
  );
};

export default WhatHappend;
