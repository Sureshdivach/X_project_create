import { useMemo, useState } from "react";

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
    ]
}

const WhoFollow=()=>{
    const [showMoreFollow, setShowMoreFollow] = useState(0);
    const _detailsArr= useMemo(()=>{
        let  counter= showMoreFollow + 1;
        let  _details = followObj.details.slice(0, 3*counter);
        return _details;
    },[showMoreFollow]);
    const _followStatus = _detailsArr?.length >= followObj.details?.length;

    return(    
         <>
       {_detailsArr.map((el)=>{
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
      <button onClick={() => setShowMoreFollow((prev)=>(_followStatus ? 0 : prev + 1 ))}> 
        {_followStatus ? "See less" :"See more"}</button>


      </>
    )
    

}
export default WhoFollow;