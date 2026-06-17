import React from 'react'

const Loginform = () => {
  return (
    <>
      <h1>Form Task</h1>

      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />

        <button type="submit">Submit</button> 
        <button type="login">Login</button>
      </form>
    </>
  )
}

export default Loginform