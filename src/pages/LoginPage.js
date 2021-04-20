import React from 'react'
import { Link } from "react-router-dom"
import back from "../assets/images/back.svg"

const LoginPage = () => {
  return (
    <div className="w-100">
      <div className="onboard__content">
        <div className="d-flex justify-content-between align-items-center">
          <div className="back__link">
            <img src={back} alt="Back" />
          </div>
          <div className="signup__link">
            <span>Don't have an account? </span>
            <Link to="/">Sign Up</Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5 onboard__form__container">
            <div className="form__title">Welcome back to Prospa</div>
            <div className="form__description mb-3">An account with powerful, personalized tools all in one place</div>
            <div className="onboarding__form">
              <div className="form-group mb-4">
                <input className="form-control input__rem" placeholder="Email Address" type="email" />
              </div>
              <div className="form-group mb-4">
                <input className="form-control input__rem" placeholder="Password" type="password" />
              </div>

              <div>
                <button className="btn form-control p-2 mt-3 btn__color">
                  Sign In
                            </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
