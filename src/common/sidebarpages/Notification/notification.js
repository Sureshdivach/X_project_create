import { Link, Outlet } from "react-router-dom";
import "./notification.scss";
import { FiSettings } from "react-icons/fi";
const NotiData = () => {
  return (
    <div className="notimain_container">
      <div className="notinav_main" >
       <div className="notinav_tabs">
         <h3>Notifications</h3>
        <span>
          <FiSettings />
        </span>
        </div>
        <div className="notinav_link">
            <Link to="all" className="link">All</Link>
            <Link to="verified" className="link">Verified</Link>
            <Link to="mention"  className="link">Mentions</Link>
        </div>
      </div>
      <hr/>
      <div className="containt_container">       
        <Outlet/>
      </div>
    </div>
  );
};
export default NotiData;
