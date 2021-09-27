import React from 'react';
import PostItem from './PostItem';
import { CSSTransition, TransitionGroup } from "react-transition-group";

function PostList({ posts, title, remove }) {

  if (posts.length === 0) {
    return (
      <p style={{ textAlign: "center", marginTop: "40px" }}>Posts not find</p>
    )
  }


  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {
          posts.map((post, index) => (
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post"
            >
              <PostItem post={post} index={index + 1} remove={remove} />
            </CSSTransition>
          ))
        }
      </TransitionGroup>
    </div>
  );
}

export default PostList;