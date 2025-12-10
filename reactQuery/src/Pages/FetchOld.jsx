import { useState, useEffect } from "react";
import { fetchPosts } from "../API/api";

const FetchOld = () => {
  const [posts, setPosts] = useState([]);

  const getPostsData = async() => {
    try{
      const res = await fetchPosts();
      const data = res.data;

      res.status === 200 ? setPosts(data): [];

    }catch(err){
      console.log(err);
      return [];
    }
  }

  useEffect (() => {
    getPostsData()
  })
  return (
    <div>
      {posts?.map((curEle) => 
      {
        return (
          <li key={curEle.id}>
            <h3>{curEle.title}</h3>
            <p>{curEle.body}</p>
          </li>
        )
      })}
    </div>
  )
}

export default FetchOld