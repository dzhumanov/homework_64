import { Posts } from "../../types";
import { useState, useEffect } from "react";
import axiosApi from "../../axiosApi";
import PostList from "../../Components/PostList/PostList";

const Posts = () => {
  const [posts, setPosts] = useState<Posts>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosApi.get("posts.json");
        setPosts(response.data);
      } finally {
      }
    };
    void fetchData();
  }, []);

  return(
    <div>
        <PostList posts={posts}/>
    </div>
  )
};

export default Posts;
