import React from "react";
import { FullPost } from "../../types";
import { Link } from "react-router-dom";

const Post: React.FC<FullPost> = ({ postId, title }) => {
  const timestamp = parseInt(postId, 10);
  const date = new Date(timestamp).toLocaleString();

  return (
    <div className="card mt-4 w-50 mx-auto">
      <div className="card-body">
        <h5 className="fw-bold">{title}</h5>
        <h6>{date}</h6>
        <Link className="btn btn-primary" to={"/post/" + postId}>
          Read more.
        </Link>
      </div>
    </div>
  );
};

export default Post;
