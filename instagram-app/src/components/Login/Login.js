import React, { useState } from 'react'

const LoginPage = (props) => {

  const [username, setUsername] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem("user", username);
      props.handleLoginUpdate();
    }}>
      <input name="username" type="text" value={username} placeholder="username" onChange={(e) => {
        setUsername(e.target.value)
      }}/>
      <input type="password" name="password" placeholder="password" />
      <input type="submit"/>
    </form>
  )
}

export default LoginPage;