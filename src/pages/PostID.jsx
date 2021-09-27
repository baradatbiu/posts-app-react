import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';


function PostID() {
  const params = useParams()

  const [post, setPost] = useState({ id: 0, title: "" })
  const [comments, setComments] = useState([])

  const [fetchPostByID, isloading] = useFetching(async (id) => {
    const response = await PostService.getByID(id);

    setPost(response.data);
  })

  const [fetchPostComments, isComloading] = useFetching(async (id) => {
    const response = await PostService.getComments(id);

    setComments(response.data);
  })

  useEffect(() => {
    fetchPostByID(params.id);
    fetchPostComments(params.id);
  }, [])

  return (
    <div>
      <h1>Post page {params.id}</h1>
      <br />

      {isloading
        ? <Loader />
        : <h3>{post.id}. {post.title}</h3>
      }
      <br />
      <h1>Comments</h1>
      {isComloading
        ? <Loader />
        : <div>
          {comments.map(comm => (
            <div key={comm.id}>
              <h5>{comm.email}</h5>
              <p>{comm.body}</p>
            </div>
          ))}
        </div>
      }
      <br />
    </div>
  );
}

export default PostID;