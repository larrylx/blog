import React from 'react'
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"

const Default = () => (
    <>
      <h1>Hello {isLoggedIn() ? getUser().user_name : "world"}!</h1>
      <p>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your{" "}
            <Link to="/users/profile">profile</Link>
          </>
        ) : (
          <>
            You should <Link to="/users/login">log in</Link> to see restricted
            content
          </>
        )}
      </p>
    </>
)

export default Default

// export const query = graphql`
// query {
//   site {
//     siteMetadata {
//         siteTitle
//         siteDescription
//     }
//   }
// }
// `
// {data.site.siteMetadata.siteTitle}
// {data.site.siteMetadata.siteDescription}