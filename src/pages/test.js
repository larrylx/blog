import React from "react"
import {post} from "../services/api"
import Layout from "../components/login-layout"

class Test extends React.Component {
  handleSubmit = async event => {
    event.preventDefault()
    let statusCode = await post('/auth/test').then((response) => {
      return response.data
    }).catch((error) => {return error.response.data});
    return statusCode
  }

  render() {
    return (
      <Layout>
        <h1>Hi, this is screct page accessable test</h1>
        <p>
        If you have an valid token or refresh token in your localStorage,
        you will see 'OK' when you press the following button.
        </p>
        <button
          onClick={async event => {
            let message = await this.handleSubmit(event)
            alert(message.message)
          }}
          >
        Click Me</button>
      </Layout>
    )
  }
}

export default Test