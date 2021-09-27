import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';

function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  function logout() {
    setIsAuth(false)

    localStorage.removeItem("auth")
  }

  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
        {isAuth
          ? <button onClick={logout}>Logout</button>
          : <Link to="/login">Login</Link>
        }
      </div>
    </div>
  );
}

export default Navbar;