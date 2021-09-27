import React, { useEffect, useRef, useState } from "react";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import XButton from "../components/UI/button/XButton";
import XModal from "../components/UI/modal/XModal";
import Loader from "../components/UI/loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import PostService from "../API/PostService";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import { useObserver } from "../hooks/useObserver";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElInPosts = useRef()

  const [fetchPosts, isPostLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);

      setPosts([...posts, ...response.data]);

      const totalCount = response.headers["x-total-count"];

      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useObserver(lastElInPosts, page < totalPages, isPostLoading, () => {
    setPage(page + 1)
  })

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page]);

  function createPost(post) {
    setPosts([...posts, { id: posts[posts.length - 1].id + 1, ...post }]);
    setModal(false);
  }

  function removePost(postId) {
    const updatedPosts = posts.filter(({ id }) => id !== postId);
    setPosts(updatedPosts);
  }

  function changePage(page) {
    setPage(page);
  }

  return (
    <div className="App">
      <XModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </XModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <XButton style={{ margin: "15px 0" }} onClick={() => setModal(true)}>
        Create new post
      </XButton>
      {postError && <p>Error - {postError}</p>}
      {isPostLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      )}
      <PostList
        posts={sortedAndSearchedPosts}
        title={"List of posts"}
        remove={removePost}
      />
      <div ref={lastElInPosts} style={{ height: "20px" }}></div>
      <Pagination page={page} totalPages={totalPages} changePage={changePage} />
    </div>
  );
}

export default Posts;