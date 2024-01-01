import React from "react";
import FBUserImg from "../pic/shirin.jpg";
// import FBUserImg from '../pic/header.jpg';
import postImage2 from "../pic/600 copy.jpg";
import postImage3 from "../pic/7-600x600.jpg";
import postImage4 from "../pic/cta-1.png";
import postImage5 from "../pic/d.png";
import postImage6 from "../pic/header.jpg";
import postImage7 from "../pic/news-2.jpg";
import postImage8 from "../pic/prev1.jpg";
import postImage1 from "../pic/secstionThere.jpg";
import postImage9 from "../pic/shop-1.jpg";
import Post from "./Post";
import PostForm from "./PostForm";
import Store from "./Store";

const Feed = (props) => {
  const Name = props.userName;

  const user = {
    userinfo: [
      {
        userProfileImg: postImage1,
        userPost: "hello guys",
        postImg: postImage1,
      },
      {
        userProfileImg: FBUserImg,
        userPost: "hello guys",
        postImg: postImage1,
      },
      {
        userProfileImg: postImage2,
        userPost: "hello guys",
        postImg: postImage4,
      },
      {
        userProfileImg: postImage3,
        userPost: "hello guys",
        postImg: FBUserImg,
      },
      {
        userProfileImg: postImage4,
        userPost: "hello guys",
        postImg: postImage1,
      },
      {
        userProfileImg: postImage5,
        userPost: "hello guys",
        postImg: postImage1,
      },
      {
        userProfileImg: postImage6,
        userPost: "hello guys",
        postImg: postImage7,
      },
      {
        userProfileImg: postImage7,
        userPost: "hello guys",
        postImg: postImage5,
      },
      {
        userProfileImg: postImage8,
        userPost: "hello guys",
        postImg: postImage9,
      },
      {
        userProfileImg: postImage9,
        userPost: "hello guys",
        postImg: postImage7,
      },
    ],
  };

  let userName = Name.slice(0, 7);
  return (
    <div>
      <div className="mineStore">
        <Store
          userName={userName}
          userAccountIMg={FBUserImg}
          bgImage={FBUserImg}
        />
        <Store
          userName={userName}
          userAccountIMg={FBUserImg}
          bgImage={FBUserImg}
        />
        <Store
          userName={userName}
          userAccountIMg={FBUserImg}
          bgImage={FBUserImg}
        />
        <Store
          userName={userName}
          userAccountIMg={FBUserImg}
          bgImage={FBUserImg}
        />
        <Store
          userName={userName}
          userAccountIMg={FBUserImg}
          bgImage={FBUserImg}
        />
        <Store
          userName={userName}
          userAccountIMg={FBUserImg}
          bgImage={FBUserImg}
        />
        <Store
          userName={userName}
          userAccountIMg={FBUserImg}
          bgImage={FBUserImg}
        />
        <Store
          userName={userName}
          userAccountIMg={FBUserImg}
          bgImage={FBUserImg}
        />
        <Store
          userName={userName}
          userAccountIMg={FBUserImg}
          bgImage={FBUserImg}
        />
        <Store
          userName={userName}
          userAccountIMg={FBUserImg}
          bgImage={FBUserImg}
        />
        <Store
          userName={userName}
          userAccountIMg={FBUserImg}
          bgImage={FBUserImg}
        />
        <Store
          userName={userName}
          userAccountIMg={FBUserImg}
          bgImage={FBUserImg}
        />
        <Store
          userName={userName}
          userAccountIMg={FBUserImg}
          bgImage={FBUserImg}
        />
        <Store
          userName={userName}
          userAccountIMg={FBUserImg}
          bgImage={FBUserImg}
        />
        <Store
          userName={userName}
          userAccountIMg={FBUserImg}
          bgImage={FBUserImg}
        />
        <Store
          userName={userName}
          userAccountIMg={FBUserImg}
          bgImage={FBUserImg}
        />
        <Store
          userName={userName}
          userAccountIMg={FBUserImg}
          bgImage={FBUserImg}
        />
        <Store
          userName={userName}
          userAccountIMg={FBUserImg}
          bgImage={FBUserImg}
        />
        <Store
          userName={userName}
          userAccountIMg={FBUserImg}
          bgImage={FBUserImg}
        />
        <Store
          userName={userName}
          userAccountIMg={FBUserImg}
          bgImage={FBUserImg}
        />
      </div>
      <PostForm userAccountIMg={FBUserImg} />

      {/* user post  */}

      {user.userinfo.map((index, user) => (
        <Post
          key={user}
          userName={props.userName}
          userAccountIMg={index.userProfileImg}
          postImage={index.postImg}
          timestamp={props.postTime}
          message={index.userPost}
        />
      ))}
    </div>
  );
};

export default Feed;
