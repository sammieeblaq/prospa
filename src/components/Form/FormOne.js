import React from 'react'

export default function FormOne() {
  return (
    <div>
      <div className="form__title">Create Account</div>
      <div className="form__description mb-3">Use your own personal information</div>
      <div className="onboarding__form">
        <div className="form-group mb-4 text__underline">
          <input className="form-control input__rem" placeholder="First Name" type="text" />
        </div>
        <div className="form-group mb-4">
          <input className="form-control input__rem" placeholder="Last Name" type="text" />
        </div>
        <div className="input-group mb-3">
          <div>
            <span className="input-group-text input__rem1 mr-4" id="basic-addon1">Country <br /> +234</span>
          </div>
          <input type="number" className="form-control input__rem" placeholder="Mobile Number" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="form-group">
          <input className="form-control input__rem" placeholder="Email Address" type="text" />
        </div>
      </div>
    </div>
  )
}
