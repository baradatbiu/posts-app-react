import React, { useContext } from 'react';
import XButton from '../components/UI/button/XButton';
import XInput from '../components/UI/input/XInput';
import { AuthContext } from '../context';

function Login() {
  const { setIsAuth } = useContext(AuthContext)

  function signInUser(e) {
    e.preventDefault();

    setIsAuth(true)

    localStorage.setItem("auth", true)
  }

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={signInUser}>
        <XInput
          type="text"
          placeholder="Login"
        />
        <XInput
          type="password"
          placeholder="Password"
        />
        <XButton>Sign in</XButton>
      </form>
    </div>
  );
}

export default Login;