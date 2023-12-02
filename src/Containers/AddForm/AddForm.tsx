import React, { useState } from "react";
import axiosApi from "../../axiosApi";
import { Post } from "../../types";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddForm = () => {
  const [post, setPost] = useState<Post>({
    title: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPost((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const date = new Date().toISOString();

    const newPost = {
        title: post.title,
        message: post.message,
        date: date,
    }
    try{
        await axiosApi.post('posts.json', newPost);
        navigate('/');
    } finally {
        setLoading(false);
    }
  }

  return (
    <div className="container w-50 mx-auto mt-5">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Post title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            name="title"
            required
            onChange={onChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formText">
          <Form.Label>Post text</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            required
            onChange={onChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="px-4">Add</Button>
      </Form>
    </div>
  );
};

export default AddForm;
