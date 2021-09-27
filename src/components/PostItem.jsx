import React from 'react'
import { useHistory } from 'react-router';
import XButton from './UI/button/XButton';

const PostItem = ({ post, remove }) => {
  const router = useHistory()

  return (
    <div className="post">
      <div className="post__content">
        <strong>{post.id}. {post.title}</strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <XButton onClick={() => remove(post.id)}>Delete</XButton>
        <XButton onClick={() => router.push(`/posts/${post.id}`)}>Open</XButton>
      </div>
    </div>
  );
}

export default PostItem;
