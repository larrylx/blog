import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    let statusCode = await handleLogin(this.state)
    return statusCode
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/users/profile`)
    }

    return (
      <>
        <h1>Log in</h1>
        <form
          // method="post" // Unclear function?
          onSubmit={async event => {
            let statusCode = await this.handleSubmit(event)
            if (statusCode===201) {
              navigate(`/users/profile`)
            }
            else {
              alert('登录失败')
            }
          }}
        >
          <label>
            Username
            <input type="text" name="username" onChange={this.handleUpdate} />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              onChange={this.handleUpdate}
            />
          </label>
          <input type="submit" value="Log In" />
        </form>
      </>
    )
  }
}

export default Login