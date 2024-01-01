// import { Avatar } from "@material-ui/core";
import React from 'react';

const Post = (props) => {
const {userName, userAccountIMg, postImage, timestamp, message, user}=props
return (

<div className='post'>
    <div className="topPost">
        {/* <Avatar></Avatar> */}
        <div className="postTopber">
            <div className="PostuserImgName">
                <div className="userAccount" key={user}>
                    <img src={userAccountIMg} alt=""  />

                </div>
                <div className="usernameTime">
                    <p>{userName}</p>
                    <div className="postTopInfo"> <span> {timestamp}</span></div>
                </div>


            </div>

            <div className="postMessage">
                <p>{message}</p>
            </div>
        </div>

        <div className="postimg">
            <img src={postImage} alt=""  />

        </div>
    </div>

    {/* post like comment shere btn */}
    <div className="posticon">
        <div className="postLikeIcon hover">
            <div className="like customStyle">✔</div>
            <div className="likeName">Like</div>
        </div>

        <div className="postcommentIcon hover ">
            <div className="comment customStyle" >📅</div>
            <div className="commentName">Comment</div>
        </div>


        <div className="postshereIcon hover">
            <div className="shere customStyle">👨‍👨‍👦‍👦</div>
            <div className="shereName">Shere</div>
        </div>


        <div className="postmeIcon hover">
            <div className="meMenu">
                <div className="me customStyle">
                    <img src={userAccountIMg} alt="" />
                </div>
                <div className='moreOption'>></div>
            </div>



        </div>

    </div>
</div>
);
};

export default Post;