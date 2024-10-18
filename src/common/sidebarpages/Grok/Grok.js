import "./grok.scss"
const grokObj={
    GrokArr1:[
          {
            id:"1",
            type:"image",
            heading:"Get Creative",
            label:"Generate stunning visuals with our new image generation capabilities",
            profimg:"https://media.gettyimages.com/id/1155833332/photo/nightlife-in-barcelona.jpg?s=2048x2048&w=gi&k=20&c=LGjZSQMim-fHIBi2CInzWpuGc8pE6O2T5-hkhgKVeZg=",
            profhead:"Make a cyberpunk picture",
            img:"https://media.istockphoto.com/id/1295764809/photo/man-silhouette-in-misty-alley-at-night-city-park-mystery-and-horror-foggy-cityscape.jpg?s=612x612&w=0&k=20&c=p27skA99bhrQ6Zk2KmeBPqn5OF9ZHgP1WYcZEWRpv4Q=",
           
          },
          {
            id:"2",
            type:"text",
            heading:"Stay Informed",
            label:"Get up_to-date info on the latest news and trending topics,",
            profimg:"https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
            profhead:"What's the latest Cybertruck news?",
            text:"Here are the key updates on the Tesla Cybertruck:--------------- Production and Deliveries: My FS CT was delivered last month and what a ball that was. My wife liked it so much that she pretty much took it over and sent me back to our black Model X Ludicrous which is certainly a fine ride, but no CT. We went to put her Sequoia out for sale and while I was prepping it I heard an awful sound like someone ripping the right quarter panel off of a new CyberTruck.",
          },
            {
              id:"3",
              type:"text",
            heading:"Ask Anything",
            label:"Grok can help with everyday tasks like writing emails, answering questions,",
            profimg:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
            profhead:"Help me write an email",
            text:"The email content is a communication sent to customers, prospective customers', or subscribers' inbox using an automation platform, a dedicated email builder, or personally. Basically, it's the text, images and other multimedia you include in your email",
          },
          {
            id:"4",
            type:"text",
            heading:"Code Better",
            label:"Ask programming questions or get help learning new concepts.",
            profimg:"https://www.shutterstock.com/image-photo/smiling-young-middle-eastern-man-260nw-2063524544.jpg",
            profhead:"Solve the Two Sum problem in javascript",
            text:"The JavaScript textContent property works to set and get the page's text content. It is used to pass and display the text content of some information, tags, and large size of data and its nodes",

          },
        ]   
}


const GrokData=()=>{
    return(
        <div className="Grok_main_cont">

    <div className="first_cont">
        <div className="content_Div">
            <h4>Introducing Grok 2</h4>
            <p>Our newest AI assistant, powered by X</p>
            <button className="grokbtn"> Subscribe now</button>
        </div>

    </div>
    <div className="second_cont">
      <div className="grok_content_con1" >
        {grokObj.GrokArr1.map((xyz)=>{
            return <div className="grok_child_container">                
                     <h5>{xyz.heading}</h5>
                     <p>{xyz.label}</p>
                     <div>
                        <div>
                            <img src={xyz.profimg} style={{width:"50px",height:"50px",borderRadius:"50px"}} alt=''/>  <span>{xyz.profhead}</span>
                        </div> <br/>
                       <div className="text_cont">
                         {xyz.type === "image" ? (
                         <img src={xyz.img} alt="" />
                          ) : (
                           <p>{xyz.text}</p>
                            )}
                        </div>
                     </div>
                   </div>
        })}

      </div>


    </div>


        </div>
    )
}
export default GrokData;