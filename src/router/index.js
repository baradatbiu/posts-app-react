import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostID from "../pages/PostID";
import Posts from "../pages/Posts";

export const privateRoutes = [
  { path: "/about", component: About, exact: true },
  { path: "/posts", component: Posts, exact: true },
  { path: "/posts/:id", component: PostID, exact: true },
];

export const publicRoutes = [
  { path: "/login", component: Login, exact: true },
  { path: "/error", component: Error },
];
