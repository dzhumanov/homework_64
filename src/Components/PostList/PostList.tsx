import React from "react";
import { Posts } from "../../types";
import Post from "./Post";

interface Props {
  posts: Posts;
}

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div className="d-flex flex-column-reverse">
      {posts ? (
        Object.keys(posts).map((key) => (
          <Post
            key={key}
            postId={posts[key].postId}
            title={posts[key].title}
            message={posts[key].message}
          />
        ))
      ) : (
        <div className="mt-5 fs-3 fw-bold mx-auto">No avialable posts</div>
      )}
    </div>
  );
};

export default Posts;
