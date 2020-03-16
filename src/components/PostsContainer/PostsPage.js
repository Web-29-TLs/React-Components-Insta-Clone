//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data
import dummyData from "../../dummy-data";

const PostsPage = () => {
  const [postData, setPostData] = useState(dummyData);
  // set up state for your data
  console.log(`PostsPage: dummyData: `, dummyData);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {postData.map(data => (
        <Post post={data} />
      ))}
    </div>
  );
};

export default PostsPage;
