import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/login-layout"
import Default from "../components/login-default"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Login from "../components/login"

const Users = () => (
  <Layout>
    <Router basepath="/users">
      <PrivateRoute path="/profile" component={Profile}/>
      <Login path="/login" />
      <Default path="/" />
    </Router>
  </Layout>
)

export default Users