import React, { useEffect, useState } from "react";
import axiosApi from "../../axiosApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FullPost, Posts } from "../../types";

interface Props {
  request: () => Promise<Posts>;
}

const PostInfo: React.FC<Props> = ({ request }) => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<FullPost | undefined>(undefined);
  const [postKeyId, setPostKeyId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await request();
        const index = Object.values(posts).findIndex(
          (post) => post.postId === params.postId
        );
        if (index !== -1) {
          setData([Object.values(posts)[index]][0]);
          setPostKeyId([Object.keys(posts)[index]][0]);
        }
      } catch (error) {
        throw error;
      }
    };

    void fetchData();
  }, [request]);

  const onDelete = async () => {
    await axiosApi.delete("posts/" + postKeyId + ".json");
    navigate("/");
  };

  const timestamp = parseInt(data?.postId || "", 10);
  const date = new Date(timestamp).toLocaleString();

  return (
    <div className=" w-50 mx-auto mt-5 shadow py-5 px-4">
      <h2 className="fw-bold">{data?.title}</h2>
      <p>{data?.message}</p>
      <p className="text-secondary">Date: {date}</p>
      <Link
        className="btn btn-primary me-4"
        to={"/post/" + params.postId + "/edit"}
      >
        Edit post
      </Link>
      <button onClick={onDelete} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};
export default PostInfo;
