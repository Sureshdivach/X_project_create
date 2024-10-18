


import { Link, useLocation } from "react-router-dom";

const LinkList=({linkArr=[],containerclass="",linkClass=""})=>{
  const location = useLocation();
    return(
        <div className={containerclass}>
        {linkArr.map((el) => {
          return <Link to ={`/${el.id}`} key={el.id} className={`${linkClass} ${location.pathname === "/"+el.id && 'Active'}`}>{el.icon} &nbsp;{el.label}</Link>;
        })}
      </div>
    )
}
export default LinkList;


