import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from "../assets/images/prospa-logo2.svg"
import side from "../assets/images/side-img.png"

export default function Sidebar() {
  const [dateEl, setDate] = useState("");
  // const history = useHistory();
  // console.log(history.location.pathname)

  useEffect(() => {
    setDate(new Date().getFullYear());
  }, [dateEl])

  return (
    <div>
      <div className="sidebar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Prospa" />
          </Link>
        </div>

        <div className="mt-5">
          <div>
            <h2 className="font-weight-light">Create multiple <br />
              sub-account
            </h2>
          </div>
          <div className="mt-3">
            <p>Organize your business finances easily <br /> with multiple accounts. No Limits</p>
          </div>
          <div className="mt-4">
            <img src={side} className="img-fluid" alt="Side" />
          </div>
        </div>
        <div className="side__footer">
          <span>&#169; {dateEl}</span>Prospa Inc
        </div>
      </div>
    </div>
  )
}
