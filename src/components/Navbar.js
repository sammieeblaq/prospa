import React from 'react'
import { useHistory } from 'react-router-dom'

import bell from "../assets/images/bell.png"
import logout from "../assets/images/logout.png"
import profile from "../assets/images/profile.png"


export default function Navbar() {
  const history = useHistory
  return (
    <div className="d-flex justify-content-between align-items-center navbar">
      <div className="d__color">
        <h4>Dashboard</h4>
      </div>
      <div className="icons mr-5">
        <img src={bell} alt="bell" className="img-fluid mr-4" width="30px" />
        <img src={profile} alt="Profile" className="img-fluid" width="30px" />
        <img src={logout} className="img-fluid ml-2" style={{ cursor: "pointer" }} onClick={() => history.push("/")} alt="Signout" width="30px" />
      </div>
    </div>
  )
}
