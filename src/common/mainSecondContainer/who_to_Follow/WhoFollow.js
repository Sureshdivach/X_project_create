import { useState } from "react";

const followObj={
    heading:"who to follow",
    details:[
        {
            followprofileimg:"https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
            label:"DiljitDosanjh.Sonam",
            tag:"@diljitsonamfan"
        },
        {
            followprofileimg:"https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            label:"Sohan lal Jat",
            tag:"@SkJat"
        },
        {
            followprofileimg:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
            label:"Manoj Kumar",
            tag:"@MKGurjar"
        },
       


    ],
    show:[
        {
            followprofileimg:"https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600",
            label:"Ashok Kumar",
            tag:"@AkNitarwal"
        },
        {
            followprofileimg:"https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600",
            label:"Ramnarayan",
            tag:"@Ramnarayan"
        },
        {
            followprofileimg:"https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600",
            label:"Manish Kumar",
            tag:"@Mkyadav"
        },
        {
            followprofileimg:"https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600",
            label:"Vikash Kumar",
            tag:"@viky"
        },
    ]
}

const WhoFollow=()=>{
    const [showMore, setShowMore] = useState(false);
    return(       <>
       {followObj.details.map((el)=>{
      return<div class="d-flex justify-content-between p-0 w-100 text-aline-left ">
            <div class="w-10" ><img style={{width:"50px",height:"50px",borderRadius:"50px"}}src={el.followprofileimg} alt='' /></div>
       
        <div class="w-50 lh-sm">
            <h6>{el.label}</h6>
            <p>{el.tag}</p>
        </div>
        <div><button> follow</button></div>
      </div>
       })
       }
      

<div  id="collapseExample" class="card card-body collapse p-0" style={{ backgroundColor: "black" }}>        
{followObj.show.map((el)=>{
      return<div class="d-flex justify-content-between p-0 w-100 text-aline-left ">
            <div class="w-10" ><img style={{width:"50px",height:"50px",borderRadius:"50px"}}src={el.followprofileimg} alt='' /></div>
       
        <div class="w-50 lh-sm">
            <h6>{el.label}</h6>
            <p>{el.tag}</p>
        </div>
        <div><button> follow</button></div>
      </div>
       })
       }
        
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
      </>
    )
    

}
export default WhoFollow;