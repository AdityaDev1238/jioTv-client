import React from 'react'

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
       <form action="/">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Enter name.."/>

    <label for="password">Password</label>
    <input type="text" id="password" name="password" placeholder="Enter Password"/>
  
    <input type="submit" value="Submit"/>
    
  </form>
    </div>
  )
}

export default Login
