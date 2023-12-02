import { Posts } from "../../types";
import { useState, useEffect } from "react";
import axiosApi from "../../axiosApi";
import PostList from "../../Components/PostList/PostList";
import Preloader from "../../Components/Preloader/Preloader";

const Posts = () => {
  const [posts, setPosts] = useState<Posts>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosApi.get("posts.json");
        setPosts(response.data);
      } finally {
        setLoading(false);
      }
    };
    void fetchData();
  }, []);

  return (
    <div>
      <div>{loading ? <Preloader /> : <PostList posts={posts} />}</div>
    </div>
  );
};

export default Posts;
