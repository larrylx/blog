import React from "react"
import { getUser } from "../services/auth"

const Profile = () => (
  <>
    <h1>Your profile</h1>
    <ul>
      <li>Name: {getUser().user_name}</li>
      <li>E-mail: {getUser().user_name}</li>
    </ul>
  </>
)

export default Profile