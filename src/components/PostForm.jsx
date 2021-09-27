import React, { useState } from 'react';
import XButton from './UI/button/XButton';
import XInput from './UI/input/XInput';

function PostForm({ create }) {
  const defaultPost = { title: "", body: "" };

  const [post, setPost] = useState(defaultPost);

  function addNewPost(e) {
    e.preventDefault();

    create(post)

    setPost(defaultPost);
  }

  return (
    <form onSubmit={addNewPost}>
      <XInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Post name"
      />
      <XInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Post description"
      />
      <XButton disabled={!post.title || !post.body}>Create post</XButton>
    </form>
  );
}

export default PostForm;