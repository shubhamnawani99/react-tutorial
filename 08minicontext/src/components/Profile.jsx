import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <>Please Login</>;

  return <>Welcome! {user.username}</>;
}

export default Profile;
