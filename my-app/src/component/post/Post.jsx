import React, { useState } from 'react'
import {Link} from "react-router-dom"
import "./post.scss"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Comments from '../comments/Comments';
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Post = ({post}) => {
  const [liked, setLiked] = useState(false)
  const [commentSection, setCommentSection] = useState(false)
  return (
    <div className='post'>
      <div className="container">
        <div className="user">
            <div className="userInfo">
                <img src={post.profilePic} alt="" />
                <div className="details">
                    <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}}>
                        <span className="name">{post.name}</span>
                    </Link>
                    <span className="date">1min ago</span>
                </div>
            </div>
            <MoreHorizIcon/>
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item" onClick={()=> setLiked(!liked)}>
            {liked? <FavoriteOutlinedIcon/> :<FavoriteBorderOutlinedIcon/>}
            10 likes
          </div>
          {/* <div className="item" > */}
          <div className="item" onClick={()=>setCommentSection(!commentSection)}>
            <TextsmsOutlinedIcon/>
           7 comments
          </div>
          <div className="item">
            <ShareOutlinedIcon/>
            share
          </div>

        </div>
        {commentSection && <Comments/>}
      </div>
    </div>
  )
}

export default Post
