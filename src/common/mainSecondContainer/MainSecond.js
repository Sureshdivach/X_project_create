import { CiSearch } from "react-icons/ci";
import "./mainSecond.scss";
import LiveOnX from "../LiveOnX/LiveOnX";

const MainSecond = () => {
  return (
    <div className="child_second_container  float-start px-3">
      <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback">
          <CiSearch />
        </span>
        <input type="text" class="form-control" placeholder="Search" />
      </div>
<div className="Subscribe">
    <h4>Subscribe to Premium</h4>
    <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
    <button>Subscribe</button>
</div>
<div className="Live_on_x" >
    <LiveOnX/>
</div>
    </div>
  );
};
export default MainSecond;
