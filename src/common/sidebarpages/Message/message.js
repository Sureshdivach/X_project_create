import "./message.scss";
import { IoSettingsOutline } from "react-icons/io5";
import { BiEnvelope } from "react-icons/bi";
const MessgeData = () => {
  return (
    <div className="mess_main_cont">
      <div className="first_mess_cont">
        <div class="d-flex w-100 justify-content-between p-2">
          <h3>Message</h3>
          <div>
            <span className="span">
              <IoSettingsOutline />
            </span>{" "}
            <span className="span">
              <BiEnvelope />
            </span>
          </div>
        </div>

       <div className="message_container">
        <h3>Welcome to your <br/>inbox!</h3>
        <p>Drop a line, share posts and more with private <br/> conversations between you and others on X.</p>
        <button className="msgbtn">          
           Write a message</button>   


          



       </div>





        
      </div>

      {/* -------------------------second_cont------------------------------ */}
      <div className="second_mess_cont">
         <div className="scond_m_cont">
      <h2>Select a message</h2>
        <p>Choose from your existing conversations, start a<br/>new one, or just keep swimming.</p>
        <button className="msgbtn2"> New message</button>
      </div></div>
      
    </div>
  );
};
export default MessgeData;
