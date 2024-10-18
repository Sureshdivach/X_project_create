import "./verifi.scss"
import { FcBusinessman } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
const verObj={
    veriarr:[
        {
            icon:<FcBusinessman />,
            img:"https://upload.wikimedia.org/wikipedia/en/c/c4/Rajasthan_Police_Logo.png" ,
            img1 :"https://images.pexels.com/photos/11602154/pexels-photo-11602154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
            img2 :"https://images.pexels.com/photos/11724636/pexels-photo-11724636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img3 :"https://images.pexels.com/photos/4858879/pexels-photo-4858879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img4 :"https://images.pexels.com/photos/7916135/pexels-photo-7916135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img5:"https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img6:"https://images.pexels.com/photos/975627/pexels-photo-975627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },

        {
           icon:<FcLike />,
           img:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
           img1:"https://images.pexels.com/photos/3951092/pexels-photo-3951092.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
           img2:"https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
           img3:"https://images.pexels.com/photos/2786914/pexels-photo-2786914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
           img4:"https://images.pexels.com/photos/17839393/pexels-photo-17839393/free-photo-of-laughing-little-girl-sitting-at-the-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
           img5:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
           img6:"https://images.pexels.com/photos/10933119/pexels-photo-10933119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
           heading:"sevaram hathoj like your reply",
           label:"Great match well done"
        },
        {
            icon:<FcBusinessman />,
            img  :"https://images.pexels.com/photos/975627/pexels-photo-975627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
            img1 :"https://images.pexels.com/photos/1485548/pexels-photo-1485548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
            img2 :"https://images.pexels.com/photos/4668351/pexels-photo-4668351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img3 :"https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img4 :"https://images.pexels.com/photos/2775518/pexels-photo-2775518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img5 :"https://images.pexels.com/photos/2113373/pexels-photo-2113373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img6 :"https://images.pexels.com/photos/2038561/pexels-photo-2038561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            label:"Anup Sarkar and 12 others followed you"
        },

    ]
}
const VerifyData=()=>{
    return(
        <div>
        {verObj.veriarr.map(abc=>{
          return <div className="main_verifi_cont" >
            <div className="icon">
                {abc.icon}
            </div>
            <div className="img_cont" >
            <img src={abc.img} style={{width:"50px",height:"50px",borderRadius:"50px"}}  alt=''/>
            <img src={abc.img1} style={{width:"50px",height:"50px",borderRadius:"50px"}}  alt=''/>
            <img src={abc.img2} style={{width:"50px",height:"50px",borderRadius:"50px"}}  alt=''/>
            <img src={abc.img3} style={{width:"50px",height:"50px",borderRadius:"50px"}}  alt=''/>
            <img src={abc.img4} style={{width:"50px",height:"50px",borderRadius:"50px"}}  alt=''/>
            <img src={abc.img5} style={{width:"50px",height:"50px",borderRadius:"50px"}}  alt=''/>
            <img src={abc.img6} style={{width:"50px",height:"50px",borderRadius:"50px"}}  alt=''/>

            <h6>{abc.heading}</h6>
            <p>{abc.label}</p>
            </div>
            
            
          </div>
        })}
        
        </div>
    )
}
export default VerifyData;