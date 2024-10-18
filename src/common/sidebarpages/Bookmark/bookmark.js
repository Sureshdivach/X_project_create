import "./bookmark.scss"
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoSearchSharp } from "react-icons/io5";
import FollowData from "../../followingpage/Following";
const BookMark=()=>{
    return(
        <div className="Book_main_cont" >
            <div className=" book_nav">
            <div className="uper_book_cont">
              <div><h3>Bookmarks</h3>
              <p>@SURESHK792</p></div> 
              <HiOutlineDotsHorizontal/> 
            </div>
            <div className="search_cont">
                <IoSearchSharp/>
                <input type='text' placeholder="Search Bookmark"/> 
            </div>
            </div>
            <div className="book_post_container">
                <FollowData/>
            </div>
        </div>
    )
}
export default BookMark;